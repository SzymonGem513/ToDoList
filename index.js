const express = require('express');
const app = express();
const { port } = require('./config')
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');


require('./db/mongoose')

//parse
//Content-type: application/json
app.use(bodyParser.json())

//routes
app.use('/api/', apiRouter);



//server
app.listen(port, () =>{
    console.log(`server listening... http://localhost:${port}`)
})