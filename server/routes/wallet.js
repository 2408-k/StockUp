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

<<<<<<< HEAD
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
=======
// importing db model
const userProfile = require("../models/user");
>>>>>>> 2d689b6eb2b409d39b7b6f2970e952d51f5ad038

/*-------------------routes---------------------*/
router.post('/',(req,res)=>
{
/*---------this route will be receiving name, and amt from body-----*/

  //adding money to wallet
<<<<<<< HEAD
  console.log(req.body.amt);
  var newWallet = parseFloat(req.body.amt)+parseFloat(userProfile.wallet);
  
  userProfile.wallet = newWallet.toFixed(2);
  res.send(JSON.stringify(userProfile));
=======
  userProfile.findOne({name : req.body.name},(err,user)=>{
    if(err){
      console.log(err);
    }
    else{
      var newWallet = parseFloat(req.body.amt)+parseFloat(user.wallet)
      user.wallet = newWallet.toFixed(2);
      user.save();
      res.send(JSON.stringify(user));

    }
  });
 
>>>>>>> 2d689b6eb2b409d39b7b6f2970e952d51f5ad038
});

/*-------------------export---------------------*/
module.exports = router;