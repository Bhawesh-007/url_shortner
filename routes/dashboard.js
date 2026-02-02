//now here i will make the dashboard of my app
//LOGIC:
//first i hae to verify the use using jwt auth
//1.i want that all the urls for specific user renders for a specific user
//2. so i think i will associate each url shortid with a user id so i will just extractt from the db
const express = require("express");
const router = express.Router();
const URL = require('../model/url');
const authMiddleware = require("../utils/jwtmiddleware");



router.get('/dashboard' , authMiddleware , async(req,res)=>{
    console.log(req.user);
    const Id = req.user.id;
    if(!Id)return res.status(401).json({
        message : "error with authentication !!"
    })
    try{
    const urls = await URL.find({owner : Id});
    res.send(urls);
    }
    catch(err){
        res.status(401).json({
            message : "cant fetch the url",
            msg: err.message,
        })
    }
})
module.exports = router;