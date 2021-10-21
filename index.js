const express = require('express');
const app = express();
const { port } = require('./config')
const apiRouter = require('./routes/api');
require('./db/mongoose')


//routes
app.use('/', apiRouter);


//server
app.listen(port, () =>{
    console.log(`server listening... http://localhost:${port}`)
})