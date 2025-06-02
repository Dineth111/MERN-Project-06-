import React, { useState } from 'react';
import axios from 'axios';

const InsertEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    ID: '',
    NAME: '',
    ADDRESS: '',
    NIC: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
    console.log(employeeData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/employee', employeeData)
      .then(() => {
        console.log("Employee added successfully");
      })
      .catch(() => {
        console.log("Employee addition failed");
      });
  };

  return (
    <div>
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="NAME">Name:</label><br />
        <input type="text" id="NAME" name="NAME" value={employeeData.NAME} onChange={handleChange} required /><br /><br />

        <label htmlFor="ID">ID:</label><br />
        <input type="text" id="ID" name="ID" value={employeeData.ID} onChange={handleChange} required /><br /><br />

        <label htmlFor="ADDRESS">Address:</label><br />
        <textarea id="ADDRESS" name="ADDRESS" rows="4" cols="50" value={employeeData.ADDRESS} onChange={handleChange} required></textarea><br /><br />

        <label htmlFor="NIC">NIC:</label><br />
        <input type="text" id="NIC" name="NIC" value={employeeData.NIC} onChange={handleChange} required /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default InsertEmployee;