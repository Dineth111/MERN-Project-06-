const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectDB = require('./config/db');

dotenv.config();  // config dotenv file

conectDB();   // call db connection

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});