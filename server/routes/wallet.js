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

// importing db model
const userProfile = require("../models/user");

/*-------------------routes---------------------*/
router.post('/',(req,res)=>
{
/*---------this route will be receiving name, and amt from body-----*/

  //adding money to wallet
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
 
});

/*-------------------export---------------------*/
module.exports = router;