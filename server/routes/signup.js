/*-------------------setup---------------------*/
const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
//body parser related
var bodyParser = require("body-parser");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// importing db model
const userProfile = require("../models/user");
const jwt = require("jsonwebtoken");

/*-------------------routes---------------------*/
router.post("/", (req, res) => {
  req.body = JSON.parse(Object.keys(req.body)[0]); // comment this when working with postman
<<<<<<< HEAD
  
=======
>>>>>>> 61a98d34d1048159783f408f14e9369dfa2fca96
  userProfile.findOne({ name: req.body.name }, (err, useru) => {
    if (useru === null) {
      const password = req.body.password;
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          // returns hash
          const user = new userProfile({
            name: req.body.name,
            wallet: 10.1,
            email: req.body.email,
            password: hash,
            stocks: [],
          });
          user.save((err, user) => {
            if (err) console.log(err);
            else {
              console.log(user.name, " added to db");
              const temp = { username: user._id };
              const token = jwt.sign(temp, process.env.JWT_SECRET);
              res.header("Access-Control-Allow-Origin", "*"); // to allow cors
              res.send(JSON.stringify({ token: token }));
            }
          });
        });
      });
    } else {
      return res
        .status(409)
        .send(JSON.stringify({ message: "Username already exists!" }));
    }
  });
});

/*-------------------export---------------------*/
module.exports = router;