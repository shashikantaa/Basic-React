const mongoose = require("mongoose");
// step 1: import

// step 2:creating a schema
const categorySchema = new mongoose.Schema(
  {
    cname: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
