/*--------------------------------setup----------------------------------------- */
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
//body parser related

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var morgan = require("morgan");
app.use(morgan("dev"));
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

//database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Succesfully connected!"))
  .catch(() => console.log("db connection failed"));
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;

/*----------------------  adding a dummy object  ------------------------------*/
// importing db model
const userProfile = require("./models/user");
userProfile.findOne({ name: "Krishna" }, (err, useru) => {
  if (useru === null) {
    const password = "password";
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        // returns hash
        const user = new userProfile({
          name: "Krishna",
          wallet: 10.1,
          email: "abc@gmail.com",
          password: hash,
          stocks: [
            { name: "google", id: 1, quantity: 10 },
            {
              name: "amazon",
              id: 21,
              quantity: 12,
            },
          ],
        });
        user.save((err, user) => {
          if (err) console.log(err);
          else {
            console.log("Dummy object added to db",user);
          }
        });
      });
    });
  } else {
    console.log("Dummy object already added to db");
  }
});

/*--------------------------------- routes -------------------------------------*/
const viewProfileRoute = require("./routes/viewProfile");
app.use("/profile", viewProfileRoute);
const walletRoute = require("./routes/wallet");
app.use("/wallet", walletRoute);
const buyStockRoute = require("./routes/buyStock");
app.use("/buystock", buyStockRoute);
const sellStockRoute = require("./routes/sellStock");
app.use("/sellstock", sellStockRoute);
const loginRoute = require("./routes/login");
app.use("/login", loginRoute);
const signupRoute = require("./routes/signup");
const User = require("./models/user");
app.use("/signup", signupRoute);
const payment = require("./routes/stripeGateway");
app.use("/payment",payment);
/*-------------------------------starting the server-----------------------------*/
app.listen(4000, () => {
  console.log("Started the server!");
});