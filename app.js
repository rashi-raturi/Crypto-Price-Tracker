const express = require('express');
require('dotenv').config();

const app = express();

const connectDB = require('./config/db');
const getPrice = require('./services/cryptoService');


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    getPrice('bitcoin');
});