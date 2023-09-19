const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  action: {
    type: String,
    required: true,
  },
});

module.exports = Todo;
