const express = require("express");
const router = express.Router();
const User = require('../model/user');
// to hash password 
const bcrypt = require("bcrypt");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
router.route('/register' , async(req,res)=>{
   //first always take what is incoming in the request
   const {username , email , password} = req.body;
   if(!username||!email||!password)return res.status(401).json({message : "Invalid data"});
   //hash password
   try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   const newUser =  new User({
     username : username,
     email : email,
     password : hashedPassword,
   });
   await newUser.save();
   return res.status(201).json({
    message : "Successfully registered",
    data : newUser,
   })
}
catch(err){
    res.status(401).json({
        status: "cant register",
        message : err.message
    })
}

})
module.exports = router;