const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const nodemailer = require("nodemailer")

const sendgridTransport =  require("nodemailer-sendgrid-transport");

const PORT = process.env.PORT || 8080

app.get("/test",(req,res)=>{
    res.send("Test Node App");
})


app.listen(PORT,(req,res)=>{
    console.log("server connected");
})