require('dotenv').config;
require('express-async-errors');

const express = require('express');
const app = express();


const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
//const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(express.json());

app.use('/api/v1',mainRouter);

app.use(notFoundMiddleware);
//app.use(errorHandlerMiddleware);

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