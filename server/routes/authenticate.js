/*-------------------setup---------------------*/
const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
// importing db model
const userProfile = require("../models/user");
const jwt = require("jsonwebtoken"); 

/*-------------------routes---------------------*/
router.post("/", async (req, res) => {
    req.body = JSON.parse(Object.keys(req.body)[0]); // comment this when working with postman
    const authtoken = req.body.authtoken;
    //console.log(authtoken);

    if(!authtoken){
        return res
          .status(401)
          .send(JSON.stringify({ message: "Authentication Failed!" }));
    }

    const decodedtoken = jwt.verify( authtoken, process.env.JWT_SECRET);

    if(!decodedtoken){
        return res
          .status(401)
          .send(JSON.stringify({ message: "Authentication Failed!" }));
    }
    
    let foundUser;
    foundUser = await userProfile.findById(decodedtoken.userid);
    
    if(!foundUser){
        return res
          .status(401)
          .send(JSON.stringify({ message: "Authentication Failed!" }));
    }

    res.header("Access-Control-Allow-Origin", "*"); // to allow cors
    res.send(JSON.stringify(foundUser));
});

/*-------------------export---------------------*/
module.exports = router;