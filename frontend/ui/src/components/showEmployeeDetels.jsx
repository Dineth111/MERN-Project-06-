import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ShoeEmployeeDetels = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/employee/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch(() => {
        console.log("Error fetching employee data");
      });
  }, [id]);

  const TableItem = (
    <div>
      <h2>Employee Details</h2>
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="row">ID</th>
            <td>{employee.ID}</td>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td>{employee.NAME}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{employee.ADDRESS}</td>
          </tr>
          <tr>
            <th scope="row">NIC</th>
            <td>{employee.NIC}</td>
          </tr>
        </tbody>
      </table>
      <Link className="btn btn-outline-primary" to="/">Back to Employee List</Link>
    </div>
  );

  return (
    <div>
      {TableItem}
      <br />
      <div>
        <h1>Employee Details</h1>
        <p>This is full data about our employees</p>
      </div>
      <div className="col ml">{TableItem}</div>
      <Link to={`/updatadetels/${employee._id}`} className="btn btn-outline-primary">
        Edit Employee
      </Link>
    </div>
  );
};

export default ShoeEmployeeDetels;