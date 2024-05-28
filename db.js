const mongoose=require('mongoose');
require('dotenv').config();

//const mongoURL= process.env.MONGODB_LOCAL_URL;
//const mongoURL='mongodb+srv://anandita01:hotel123@cluster0.h2nrosp.mongodb.net/'

const mongoURL=process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})


const db=mongoose.connection;

//event listener
db.on('connected',()=>{
    console.log('Connected to MongoDB server')
})
db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

module.exports=db;