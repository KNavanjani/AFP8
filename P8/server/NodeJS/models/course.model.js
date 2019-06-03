const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Course = new Schema({
  name: {
    type: String
  },

  code: {
    type: String
  },

  passmark: {
    type: Number
  },
  lectureIncharge: {
    type: String
  },
  subjects: {
    type: Array
  }
});

module.exports = mongoose.model("Course", Course);
