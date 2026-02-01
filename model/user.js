// now here i will make schema of user
const mongoose = require("mongoose");
const express = require("express");
const userSchema  = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String ,
        required : true,
    }
})
const User = mongoose.model('User',userSchema);
module.exports = User;