//this is to get the shortened url and update the url shcema 
const express = require("express");
const router = express.Router();
const urlShortner = require("../controller/urlshortener.js")
const authMiddleware = require('../utils/jwtmiddleware.js')
const URL = require('../model/url.js');
const app = express()
app.use(express.urlencoded({extended : true}));
app.use(express.json());
router.post('/url' , authMiddleware , urlShortner);
module.exports = router;
