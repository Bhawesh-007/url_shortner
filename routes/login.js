//here i will make route for login 
//LOGIC:
//1.i wnat that user will give me username and password
//2. then i will match it with db and will return a jwt token
//3. all further requrest will require that token
const express = require("express");
const router = express.Router();
const User = require("../model/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const secret = process.env.JWT_SECRET;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
router.post('/login' , async(req,res)=>{
    const {username , password} = req.body;
    if(!username ||!password)return res.status(401).json({message : "Error in credentials"});
     try{
        const user = await User.findOne({
             username
        })
        if(!user)return res.status(401).json({
            message : "user not found"
        })
        const pass = await bcrypt.compare(password,user.password);
        if(!pass)return res.status(401).json({
            message : "Invalid password !!"
        })
        //now if user is there in the database then i will just return the jwt token 
        const token = jwt.sign({
            id : user._id
        },
        secret,
        {expiresIn : "1h"}
    )
    res.status(200).json({
        message : "user is logged in !!",
        key : token,
    })
}
catch(err){
    res.status(401).json({
        status : "error logging in the user",
        message : err.message
        
    })
}
 
})
module.exports = router;