const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();
app.use(express.json());
//body parser 
const bodyParser= require('body-parser');

const MenuItem=require('./models/MenuItem');
app.use(bodyParser.json());//will store all data in req.body
app.use(bodyParser.urlencoded({extended:true}));
// app.use(Person);


app.get('/',(req,res)=>{
 res.send('Welcome to my hotel')
})





//import routers
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
//use routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log('listening on port 3000')
})