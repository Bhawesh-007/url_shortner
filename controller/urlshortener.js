//now i will make the url shortener logic
//LOGIC:
//1. here i will use  nanoid package for every url which user will give the input
//2.then i will assign data according to the url schema
//3. so i will provide a input field to the user from which i will get the url and its shortid
//4. so what can i do is that whenver use will click at generate button then a post request will be made and its body will contain that url

const {nanoid} = require('nanoid');
const URL = require('../model/url.js');

const urlShortner = async(req,res)=>{
     const {url} = req.body;
     if(!url){
        return res.status(500).json({
            message : "url not found",  
        })
     }
     try{
        const shortId = nanoid(8);
        const entry =  new URL({
            owner : req.user.id,
            shortID : shortId,
            redirectID : url,
            visited : [],
        });
        await entry.save()
        return res.status(201).json({
      status: "success",
      data: entry,
    });
     }
     catch(err){
        res.status(500).json({
            status : "failure",
            message : err.message,
        })
     }

}
module.exports = urlShortner;
