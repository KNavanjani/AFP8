const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Subject = new Schema({
  sid: {
    type: String
  },

  name: {
    type: String
  },

  description: {
    type: String
  },
  amount: {
    type: Number
  }
});

module.exports = mongoose.model("Subject", Subject);
