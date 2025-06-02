const express = require('express');
const cors = require('cors');
const dbconection = require('./config/db');
const routes = require('./routes/employee');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());                                        //use db security
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello server is running.."));
app.use('/api/employee', routes);

const port = 3000; // assign a port 

app.listen(port, () => console.log(`Server running on port ${port}`));