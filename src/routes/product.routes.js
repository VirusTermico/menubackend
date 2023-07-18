const express = require("express");
const ProductModel = require("../models/product.model");
const {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProduct,
} = require("../controllers/product.controller");
const advancedResults = require("../middlewares/advancedResult");
const reviewRoute = require("./review.routes");

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middlewares/auth");

router.use("/:productId/reviews", reviewRoute);

router
  .route("/")
  .get(
    advancedResults(ProductModel, { path: "reviews", select: "body rating " }),
    getProducts
  )
  .post(protect, authorize("admin", "manager"), addProduct);
router
  .route("/:id")
  .get(getProduct)
  .put(protect, authorize("admin", "manager"), updateProduct)
  .delete(protect, authorize("admin", "manager"), deleteProduct);

module.exports = router;
