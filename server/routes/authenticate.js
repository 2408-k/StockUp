/*-------------------setup---------------------*/
const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
// importing db model
const userProfile = require("../models/user");
const jwt = require("jsonwebtoken");

/*-------------------routes---------------------*/
router.post("/", (req, res) => {
  
    const authtoken = req.body.authtoken;
    console.log(authtoken);

    if(!authtoken){
        return res
          .status(401)
          .send(JSON.stringify({ message: "Authentication Failed!" }));
    }

    const decodedtoken = jwt.verify( authtoken, process.env.JWT_SECRET);
    console.log(decodedtoken);

    res.header("Access-Control-Allow-Origin", "*"); // to allow cors
    res.send(JSON.stringify({ decodedtoken: "ok" }));

});

/*-------------------export---------------------*/
module.exports = router;