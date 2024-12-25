
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
const cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    optionsSuccessStatus:200}))
app.use('/',userRoute)
app.listen(process.env.PORT,()=>{
    console.log("Server started running")
})
