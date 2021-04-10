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

//database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true,useUnifiedTopology: true}).then(()=> console.log("Succesfully connected!")).catch(()=>console.log("db connection failed"));
mongoose.set("useCreateIndex", true);
mongoose.Promise= global.Promise;

/*----------------------  adding a dummy object  ------------------------------*/
// importing db model
const userProfile = require("./models/user");
userProfile.findOne({name: 'Krishna'}, (err,useru) => {
  if(useru === null)
  {  const user = new userProfile( {
      name:'Krishna',
      wallet: 10.1,
      email:'abc@gmail.com',
      stocks:[{name:'google',
      id: 1
    ,quantity:10},{
      name:'amazon',id: 21,quantity:12
    }]
    } );
    user.save((err,user) => {
      if(err)
      console.log(err);
      else
      {
        console.log("Dummy object added to db");
      }
    } );
   
}
  else
  {
      console.log("Dummy object already added to db",useru);
  }
});


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
