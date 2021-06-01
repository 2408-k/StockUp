const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    name: String,
    password: String,
    wallet: Number,
    email: String,
<<<<<<< HEAD
    stocks: [{
=======
    password: String,
    stocks: [ {
>>>>>>> 61a98d34d1048159783f408f14e9369dfa2fca96
      name: String,
      id: Number,
      quantity: Number
    } ]
  });

  const User = new mongoose.model("User", userSchema);

  module.exports = User;