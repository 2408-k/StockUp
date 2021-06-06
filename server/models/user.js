const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    name: String,
    wallet: Number,
    email: String,
    password: String,
    stocks: [ {
      name: String,
      quantity: Number
    } ]
  });

  const User = new mongoose.model("User", userSchema);

  module.exports = User;