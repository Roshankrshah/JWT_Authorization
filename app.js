require('dotenv');
require('express-async-errors');

const express = require('express');
const app = express();

const port = process.env.Port || 3000;

const start = async () =>{
    try{
    app.listen(port,()=>{
        console.log(`Server listening at http://localhost:${port}`)});
    }catch(error){
        console.log(error);
    }
}
start();