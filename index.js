// iam writeing all files in  CommonJS
const express = require("express");
const connectDB = require("./connect/mongo.js")
const mongoose = require("mongoose");
const app = express();
const PORT  = 8080;
// now what i want to do is :
// i  want to create a url shortener for users 
//what it includes ??
//1. user registration and login
//2. authentication process (jwt)
//3. after that a page would render of that user which will list all the sites which he has used to shorten url
//4. i wil also display no.of visits on his url
connectDB()
.then(()=>{
   app.listen(PORT, (req,res)=>{
    console.log("all well !!");
}) 
})
.catch((err)=>{(
    console.log("error connecting db",err)
)})
