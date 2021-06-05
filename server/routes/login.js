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
  req.body = JSON.parse(Object.keys(req.body)[0]); // comment this when working with postman

  userProfile.findOne({ name: req.body.name }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        return res
          .status(404)
          .send(JSON.stringify({ message: "User not found!" }));
      } else {
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              const temp = { userid: user._id };
              const token = jwt.sign(temp, process.env.JWT_SECRET);
              res.header("Access-Control-Allow-Origin", "*"); // to allow cors
              res.send(JSON.stringify({ token: token }));
            } else {
              return res
                .status(401)
                .send(JSON.stringify({ message: "Invalid password!" }));
            }
          }
        );
      }
    }
  });
});

/*-------------------export---------------------*/
module.exports = router;