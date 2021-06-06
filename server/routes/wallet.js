/*-------------------setup---------------------*/
const express = require("express");
const router = express.Router();
const app = express();
const jwt = require("jsonwebtoken");
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

/*-------------------routes---------------------*/
router.post("/", (req, res) => {
  req.body = JSON.parse(Object.keys(req.body)[0]); // comment this when working with postman
  console.log(req.body);
  const authtoken = req.body.authtoken;
  if (!authtoken) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Authentication Failed!" }));
  }

  const decodedtoken = jwt.verify(authtoken, process.env.JWT_SECRET);

  if (!decodedtoken) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Authentication Failed!" }));
  }

  //adding money to wallet
  userProfile.findOne({ name: req.body.name }, (err, user) => {
    if (err) {
      return res
        .status(401)
        .send(JSON.stringify({ message: "Authentication Failed!" }));
    } else {
      var newWallet = parseFloat(req.body.amt) + parseFloat(user.wallet);
      user.wallet = newWallet.toFixed(2);
      user.save();
      res.header("Access-Control-Allow-Origin", "*"); // to allow cors
      res.send(JSON.stringify(user));
    }
  });
});

/*-------------------export---------------------*/
module.exports = router;
