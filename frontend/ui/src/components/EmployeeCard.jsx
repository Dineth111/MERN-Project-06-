import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {

  const onDeleteClick = (id) => { // delete user
    axios.delete(`http://localhost:3000/api/employee/${id}`)  //delete user data
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Delete error", error);
      });
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Employee Image"
          height="140"
          image="https://img.freepik.com/premium-psd/3d-cartoon-man-with-laptop-sitting-armchair-working-office-using-social-networks_887255-4.jpg?ga=GA1.1.18667849.1735277360&semt=ais_hybrid"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {employee.NAME}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {employee.ID}
            <br />
            {employee.ADDRESS}
            <br />
            {employee.NIC}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link className="btn btn-outline-primary" to={`/showdetails/${employee._id}`}> Details</Link>
          <Button size="small" onClick={() => onDeleteClick(employee._id)}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EmployeeCard;