const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const app = express();


// import mongoose
const conexion = require('./config/config')
conexion(`${process.env.URI}`)

// import route
const register = require('./Routes/register');
const login = require('./Routes/login');
const Vinyls = require('./Routes/getVinyls');
const buy = require('./routes/buyVinyls')


// route middleware
app.use(express.json());
app.use(cors());
app.use('/api',register);
app.use('/api',login);
app.use('/api',Vinyls);
app.use('/api',buy);

app.get('/', (req, res)=>{
    res.json({

        message:'oki'
    })
})

app.listen(process.env.PORT, ()=> console.log(`${process.env.URI}`))

module.exports = app;