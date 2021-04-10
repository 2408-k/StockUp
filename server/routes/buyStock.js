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
      // dummy stock
      var stockk = {
        name: 'microsoft',
        id: 12,
        price: 42.42,
        quantity: 4
    };
    var targetStockId = parseInt(stockk.id);
    var buyingQuant = parseInt(stockk.quantity);

    // search in db
    userProfile.findOne({name : req.body.name},(err,user)=>{
        if(err){
          console.log(err);
        }
        else{
       
            //find target stock
            var index = user.stocks.findIndex((temp) => temp.id === targetStockId);

           //adding the stock
           if(index === -1)
           user.stocks.push(stockk);
           else
           {
             user.stocks[index].quantity= parseInt(user.stocks[index].quantity) + buyingQuant;
            }
    
           //find target stock 
           index = user.stocks.findIndex((temp) => temp.id === targetStockId);
  
           //updating the wallet after purchase
           var targetStockPriceDummy = stockk.price // real time value to be fetched using an api
           var newWallet = (parseFloat(targetStockPriceDummy) * parseFloat(buyingQuant))
           user.wallet = parseFloat(user.wallet.toFixed(2)) - parseFloat(newWallet.toFixed(2));

           user.save();
           res.send(JSON.stringify(user));
        }
      });
  

});

/*-------------------export---------------------*/
module.exports = router;