const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port  = 3000;

const userRouter = require('./routes/user');
const petRouter = require('./routes/pets');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/users',userRouter);
app.use('/pets',petRouter)
//POST - CREATE PET 
//GET -READ PET
// PUT - UPDATE PET
// DELETE - DELETE DO IT


app.listen(port,()=>{
    console.log('I am your server and I be running');
})