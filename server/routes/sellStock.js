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
  // dummy stock (take id as 1, and quantity below 10)
  var targetStockId = req.body.stock;
  var sellingQuant = parseInt(req.body.quantity);
  userProfile.findOne({ name: req.body.name }, (err, user) => {
    if (err) {
      console.log(err);
      return res
        .status(401)
        .send(JSON.stringify({ message: "Authentication Failed!" }));
    } else {
      //find target stock
     console.log(user.stocks[0].name," ",targetStockId);
      var index = user.stocks.findIndex((temp) => temp.name === targetStockId.toLowerCase());

      //error handling
      if (index === -1 || user.stocks[index].quantity < sellingQuant) {
        var errorObj = {
          name: "error while selling stock",
        };
        return res.send(JSON.stringify(errorObj));
      }
      // add money to wallet after sale
      var targetStockPrice = req.body.price;
      var newWallet = Number(targetStockPrice) * Number(sellingQuant);
      user.wallet =
        Number(newWallet.toFixed(2)) + Number(user.wallet.toFixed(2));

      // update quantity and remove the stock if quantity is 0
      user.stocks[index].quantity =
        parseInt(user.stocks[index].quantity) - sellingQuant;
      if (user.stocks[index].quantity === 0) {
        user.stocks.splice(index, 1);
      }

      user.save();
      res.header("Access-Control-Allow-Origin", "*"); // to allow cors
      res.send(JSON.stringify(user));
    }
  });
});

/*-------------------export---------------------*/
module.exports = router;
