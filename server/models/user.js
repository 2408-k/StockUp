const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    wallet: Number,
    email: String,
    stocks: [ {
      name: String,
      id: Number,
      quantity: Number
    } ]
  });

  const User = new mongoose.model("User", userSchema);

  module.exports = User;