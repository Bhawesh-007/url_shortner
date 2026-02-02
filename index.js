// iam writeing all files in  CommonJS
const express = require("express");
const connectDB = require("./connect/mongo.js")

const router_register = require('./routes/register.js');
const router_login = require('./routes/login.js');
const router_dashboard = require('./routes/dashboard.js');
const geturl = require("./routes/geturl.js")
const app = express();
const PORT  = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// now what i want to do is :
// i  want to create a url shortener for users 
//what it includes ??
//1. user registration and login
//2. authentication process (jwt)
//3. after that a page would render of that user which will lṭist all the sites which he has used to shorten url
//4. i wil also display no.of visits on his url
app.use('/api/auth' , router_register);
app.use('/api/auth' , router_login);
app.use('/api/user', router_dashboard);
app.use('/api/user/dashboard' , geturl);
app.get('/',(req,res)=>{
    res.send("WELCOME !!!");
})
connectDB()
.then(()=>{
   app.listen(PORT, (req,res)=>{
    console.log("all well !!");
}) 
})
.catch((err)=>{(
    console.log("error connecting db",err)
)})
