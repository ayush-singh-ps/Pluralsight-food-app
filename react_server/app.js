const express=require('express')
const {knex}=require('./config/connect')
const router=require('./routes')
const app=express();
const cors = require('cors');

app.use(express.json());
app.use('/api',router)



 app.use(cors());
app.listen(8080,()=>{
    console.log('listening');
   
})


