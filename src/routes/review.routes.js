const express = require("express");
const ReviewModel = require("../models/review.model");
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require("../controllers/review.controller");
const advancedResults = require("../middlewares/advancedResult");

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middlewares/auth");

router
  .route("/")
  .get(
    advancedResults(ReviewModel, { path: "user", select: "name" }),
    getReviews
  )
  .post(protect, addReview);
router
  .route("/:id")
  .get(getReview)
  .put(protect, authorize("admin", "manager"), updateReview)
  .delete(protect, authorize("admin", "manager"), deleteReview);

module.exports = router;
