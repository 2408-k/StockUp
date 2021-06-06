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
  req.body = JSON.parse(Object.keys(req.body)[0]);
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

  var targetStockId = req.body.stock;
  var buyingQuant = parseInt(req.body.quantity);
  var targetStockPrice = parseInt(req.body.price); // real time value to be fetched using an api
  // search in db
  userProfile.findOne({ name: req.body.name }, (err, user) => {
    if (err) {
      console.log(err);
      return res
        .status(401)
        .send(JSON.stringify({ message: "Authentication Failed!" }));
    } else {
      //find target stock
      var index = user.stocks.findIndex((temp) => temp.name === targetStockId);
      //error handling
      var newWallet = parseFloat(targetStockPrice) * parseFloat(buyingQuant);
      if (newWallet > user.wallet) {
        var errorObj = {
          name: "insufficient funds in wallet",
        };
        res.header("Access-Control-Allow-Origin", "*"); // to allow cors
        return res.send(JSON.stringify(errorObj));
      }
      //adding the stock
      if (index === -1)
        user.stocks.push({ name: targetStockId, quantity: buyingQuant });
      else {
        user.stocks[index].quantity =
          parseInt(user.stocks[index].quantity) + buyingQuant;
      }

      //find target stock
      index = user.stocks.findIndex((temp) => temp.name === targetStockId);

      //updating the wallet after purchase

      user.wallet =
        parseFloat(user.wallet.toFixed(2)) - parseFloat(newWallet.toFixed(2));

      user.save();
      res.header("Access-Control-Allow-Origin", "*"); // to allow cors
      res.send(JSON.stringify(user));
    }
  });
});

/*-------------------export---------------------*/
module.exports = router;
