const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/plant-shop";

const dbConnection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connection successfull");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { dbConnection };
