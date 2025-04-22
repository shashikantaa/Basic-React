const mongoose = require("mongoose");
// step 1: import

// step 2:creating a schema
const plantSchema = new mongoose.Schema({
  pname: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

module.exports = mongoose.model("plant", plantSchema);
