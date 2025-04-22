const categorySchema = require("../models/category_model");

const CategoryInsert = async (req, res) => {
  try {
    console.log(req.body);
    const { cname } = req.body;
    const categoryInfo = new categorySchema({ cname });
    const categorySaved = await categoryInfo.save();
    res.send(categorySaved);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const GetCategory = async (req, res) => {
  try {
    const category = await categorySchema.find();
    res.send(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const deleteCategory = async (req, res) => {
  try {
    let category = await categorySchema.findById(req.params.id);
    if (!category) {
      return res.status(404).send("Not Found");
    }
    category = await categorySchema.findByIdAndDelete(req.params.id);
    res.json({ sucess: "Deleted Succesfully", category: category });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const updatecategory = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const savedData = await categorySchema.findByIdAndUpdate(id, data);
    res.json({ success: true, message: "Updated Successfulyy", savedData });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Internal Server Error" });
  }
};
const SingleViewCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await categorySchema.findById(id);
    res.json({ success: true, message: "Retrived Succesfully", data });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Internal Server Error" });
  }
};
module.exports = {
  CategoryInsert,
  GetCategory,
  deleteCategory,
  updatecategory,
  SingleViewCategory,
};
