const express=require('express')
const router=require('./routes')
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app=express();

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json());
app.use('/api',router)

module.exports = app

