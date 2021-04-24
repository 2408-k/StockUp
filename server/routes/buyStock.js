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
  

    // search in db
    userProfile.findOne({name : req.body.name},(err,user)=>{
        if(err){
          console.log(err);
        }
        else{
           // dummy stock
          var targetStockId = parseInt(req.body.StockId);
          var buyingQuant = parseInt(req.body.quantity);
          var stockk = {name:'hardcode', //will have to fetch exact details using API !!
                        id: targetStockId
                       ,quantity:buyingQuant};
         
          
            //find target stock
            var index = user.stocks.findIndex((temp) => temp.id === targetStockId);
            console.log(user.wallet);
            //error handling 
            var targetStockPriceDummy = 100; // real time value to be fetched using an api
            var newWallet = (parseFloat(targetStockPriceDummy) * parseFloat(buyingQuant));
            if(newWallet > user.wallet)
            {
              var errorObj={
                name : "error"
              };
              res.send(JSON.stringify(errorObj));
            }
           else{
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
           user.wallet = parseFloat(user.wallet.toFixed(2)) - parseFloat(newWallet.toFixed(2));

           user.save();
           res.send(JSON.stringify(user));
          }
        }
      });
  

});

/*-------------------export---------------------*/
module.exports = router;