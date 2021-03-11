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
router.get('/',(req,res)=>
{
  res.send(JSON.stringify(userProfile));
});

/*-------------------export---------------------*/
module.exports = router;