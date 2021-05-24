/*--------------------------------setup----------------------------------------- */ 
const express = require('express');
const app = express();
var morgan  = require('morgan');
app.use(morgan('dev'));
// body parser
var bodyParser = require('body-parser'); 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/*--------------------------------- routes -------------------------------------*/
const viewProfileRoute = require('./routes/viewProfile');
app.use('/profile',viewProfileRoute);
const walletRoute = require('./routes/wallet');
app.use('/wallet',walletRoute);
const buyStockRoute = require('./routes/buyStock');
app.use('/buystock',buyStockRoute);
const sellStockRoute = require('./routes/sellStock');
app.use('/sellstock',sellStockRoute)

/*-------------------------------starting the server-----------------------------*/
app.listen(3000,()=>{
    console.log("Started the server!");
});
