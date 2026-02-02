//here i will make the jwt middleware which will be used for every request
const jwt = require("jsonwebtoken");
const express =  require("express");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            message : "NOT Authorized",
        })
    }
    try{
        const token = authHeader.split(" ")[1];
        const decoded  = jwt.verify(token,process.env.JWT_SECRET);
        req.body = decoded; //here i am assigning body to the req.body
        next();

    }
    catch(err){
        res.status(401).json({
            message :  err.message
        })
    }
}
module.exports = authMiddleware;