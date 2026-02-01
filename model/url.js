const mongoose = require("mongoose");
//now i will make schema for urls 
const express = require("express");
const urlSchema = new mongoose.Schema({
    shortID:{
        type: String,
        required: true,
    },
    redirectID: {
        type : String,
        required : true,
    },
    visited :[
        {
            
        timestamp :
        {
           type: Date,
            default : Date.now
        }
            
        }
    ]
})
const URL = mongoose.model('URL',urlSchema);
module.exports = URL;