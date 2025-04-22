const express = require("express");
const router = express.Router();

const {
  CategoryInsert,
  GetCategory,
  deleteCategory,
  updatecategory,
  SingleViewCategory,
} = require("../controllers/category_controller");

router.post("/categoryInsert", CategoryInsert);
router.get("/getcategory", GetCategory);
router.delete("/deletecategory/:id", deleteCategory);
router.put("/update/:id", updatecategory);
router.get("/single-view/:id", SingleViewCategory);

module.exports = router;
