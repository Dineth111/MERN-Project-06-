import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const lowercaseQuery = searchQuery.toLowerCase();
    const filtered = employees.filter(              //search function
      (employee) => employee.NAME.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredEmployees(filtered);
  }, [searchQuery, employees]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/employee')  //return user data
      .then((res) => {
        setEmployees(res.data);
        setFilteredEmployees(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("Error while getting data");
      });
  }, []); // Dependency array should be here

  const generatePdf = () => {    //download pdf
    const doc = new jsPDF();
    const tableColumn = ['Employee Name'];
    const tableRows = [];
    filteredEmployees.forEach(employee => {
      const employeeData = [
        employee.NAME
      ];
      tableRows.push(employeeData);
    });
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20
    });
    doc.text('Employee List', 14, 15);
    doc.save('employee_list.pdf');
  };

  return (
    <div>
      <div className='search_bar'>
        <input
          type="text"
          placeholder='Search employee'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='download'>   
          <button onClick={generatePdf}>Download Pdf</button>
        </div>
      </div>
      {filteredEmployees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        filteredEmployees.map((employee, index) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))
      )}
    </div>
  );
}

export default EmployeeList;