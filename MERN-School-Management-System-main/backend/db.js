const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/school-management";

const dbConnection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connection successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { dbConnection };
