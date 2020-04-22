const mongoose = require("mongoose");
const keys = require("../config/keys");
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Connected");
    }
  }
);
