const express = require("express");
const CategoryModel = require("../models/category.model");
const {
  getCategories,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const advancedResults = require("../middlewares/advancedResult");

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middlewares/auth");

router
  .route("/")
  .get(
    advancedResults(CategoryModel, { path: "products", select: "name image price description available" }),
    getCategories
  )
  .post(protect, authorize("admin", "manager"), addCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(protect, authorize("admin", "manager"), updateCategory)
  .delete(protect, authorize("admin", "manager"), deleteCategory);

module.exports = router;
