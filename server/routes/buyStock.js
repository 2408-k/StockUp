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
    wallet:0,
    stocks:[{name:'google',
    id: 1
,price: 523.0,quantity:10},{
    name:'amazon',id: 21,price:1230.23,quantity:12
}]
};

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

    //find target stock
    var index = userProfile.stocks.findIndex((temp) => temp.id === targetStockId);

    //adding the stock
    if(index === -1)
    userProfile.stocks.push(stockk);
    else
    {
       userProfile.stocks[index].quantity= parseInt(userProfile.stocks[index].quantity) + buyingQuant;
    }
    
    //find target stock 
    index = userProfile.stocks.findIndex((temp) => temp.id === targetStockId);

    //updating the wallet after purchase
    var newWallet = (parseFloat(userProfile.stocks[index].price) * parseFloat(buyingQuant))
    userProfile.wallet = parseFloat(userProfile.wallet.toFixed(2)) - parseFloat(newWallet.toFixed(2));


    res.send(JSON.stringify(userProfile));
});

/*-------------------export---------------------*/
module.exports = router;