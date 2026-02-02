const mongoose = require("mongoose");
const User = require('./user.js');
//now i will make schema for urls 

const urlSchema = new mongoose.Schema({
    owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref : User,
      requried : true,
    },
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