const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//now i will connect mongoose
const connectDB =  async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO Connected !!")
    }
    catch(err){
        console.log("Error  connecting to DB!!",err);
    }
};
module.exports = connectDB;