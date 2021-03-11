/*-------------------setup---------------------*/
const express = require('express');
const router = express.Router();
const app = express();

//body parser related
var bodyParser = require('body-parser'); 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/*-------------------demo object---------------------*/
var userProfile = {
  name:'Krishna',
  email:'abc@gmail.com',
  wallet:10.43,
  stocks:[{name:'google',
  id: 1
,price: 523.0,quantity:10},{
  name:'amazon',id: 21,price:1230.23,quantity:12
}]
};

/*-------------------routes---------------------*/
router.post('/',(req,res)=>
{
  // dummy stock (take id as 1, and quantity below 10)
  var targetStockId = parseInt(req.body.StockId);
  var sellingQuant = parseInt(req.body.quantity);

  //find target stock
  var index = userProfile.stocks.findIndex((temp) => temp.id === targetStockId);

  // add money to wallet after sale
  var newWallet = (parseFloat(userProfile.stocks[index].price) * parseFloat(sellingQuant))
  userProfile.wallet = parseFloat(newWallet.toFixed(2)) + parseFloat(userProfile.wallet.toFixed(2));

  // update quantity and remove the stock if quantity is 0
  userProfile.stocks[index].quantity = parseInt(userProfile.stocks[index].quantity) - sellingQuant;
  if(userProfile.stocks[index].quantity === 0)
  {
      userProfile.stocks.splice(index,1);
  }

  res.send(JSON.stringify(userProfile));
});

/*-------------------export---------------------*/
module.exports = router;