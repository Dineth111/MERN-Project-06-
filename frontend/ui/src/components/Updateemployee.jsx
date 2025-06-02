import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Updateemployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    ID: '',
    NAME: '',
    ADDRESS: '',
    NIC: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/employee/${id}`)
      .then((res) => {
        setEmployee({
          ID: res.data.ID,
          NAME: res.data.NAME,
          ADDRESS: res.data.ADDRESS,
          NIC: res.data.NIC,
        });
      })
      .catch(() => {
        console.log('Error fetching employee data');
      });
  }, [id]);

  const onChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      ID: employee.ID,
      NAME: employee.NAME,
      ADDRESS: employee.ADDRESS,
      NIC: employee.NIC,
    };

    axios.put(`http://localhost:3000/api/employee/${id}`, data)  //update user
      .then((res) => {
        navigate(`/showdetels/${id}`);
      })
      .catch((err) => {
        console.log("Error in updating employee data");
      });
  };

  return (
    <div>
      <div className='col updateEmployee m-auto'>
        <div className='constrain'>
          <Link to='/' className='btn btn-primary m-auto'>
            Show Employee List
          </Link>
          <div>
            <form className='user updateform' onSubmit={onSubmit}>
              <label>ID</label>
              <input type="text" name="ID" value={employee.ID} onChange={onChange} />
              <label>NAME</label>
              <input type="text" name="NAME" value={employee.NAME} onChange={onChange} />
              <label>ADDRESS</label>
              <input type="text" name="ADDRESS" value={employee.ADDRESS} onChange={onChange} />
              <label>NIC</label>
              <input type="text" name="NIC" value={employee.NIC} onChange={onChange} />
              <input type='submit' value='Update Employee' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateemployee;