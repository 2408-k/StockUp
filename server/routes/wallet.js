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
  wallet: 10.1,
  stocks:[{name:'google',
  id: 1
,price: 523.0,quantity:10},{
  name:'amazon',id: 21,price:1230.23,quantity:12
}]
};

/*-------------------routes---------------------*/
router.post('/',(req,res)=>
{
  //adding money to wallet
  console.log(req.body.amt);
  var newWallet = parseFloat(req.body.amt)+parseFloat(userProfile.wallet);
  
  userProfile.wallet = newWallet.toFixed(2);
  res.send(JSON.stringify(userProfile));
});

/*-------------------export---------------------*/
module.exports = router;