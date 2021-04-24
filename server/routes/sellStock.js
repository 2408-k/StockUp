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
  /*---------this route will be receiving name, StockId and quantity from body-----*/

  // dummy stock (take id as 1, and quantity below 10)
  var targetStockId = parseInt(req.body.StockId);
  var sellingQuant = parseInt(req.body.quantity);
  userProfile.findOne({name : req.body.name},(err,user)=>{
    if(err){
      console.log(err);
    }
    else{
        //find target stock
        var index = user.stocks.findIndex((temp) => temp.id === targetStockId);
        //error handling 
        if(index===-1 || user.stocks[index].quantity < sellingQuant)
        {
          var errorObj={
            name : "error"
          };
          res.send(JSON.stringify(errorObj));
        }
        else{
        // add money to wallet after sale
        var targetStockPrice=100; // real time value to be fetched using api
        var newWallet = (Number(targetStockPrice) * Number(sellingQuant))
        user.wallet = Number(newWallet.toFixed(2)) + Number(user.wallet.toFixed(2));

        // update quantity and remove the stock if quantity is 0
        user.stocks[index].quantity = parseInt(user.stocks[index].quantity) - parseInt(sellingQuant);
       if(user.stocks[index].quantity === 0)
       {
         user.stocks.splice(index,1);
        }

       user.save();
       res.send(JSON.stringify(user));
      }
    }
  });

});

/*-------------------export---------------------*/
module.exports = router;