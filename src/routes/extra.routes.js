const express = require("express");
const ExtraModel = require("../models/extra.model");
const {
  getExtras,
  getExtra,
  addExtra,
  updateExtra,
  deleteExtra,
} = require("../controllers/extra.controller");
const advancedResults = require("../middlewares/advancedResult");

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middlewares/auth");

router
  .route("/")
  .get(
    advancedResults(ExtraModel, { path: "place", select: "name" }),
    getExtras
  )
  .post(protect, authorize("admin", "manager"), addExtra);
router
  .route("/:id")
  .get(getExtra)
  .put(protect, authorize("admin", "manager"), updateExtra)
  .delete(protect, authorize("admin", "manager"), deleteExtra);

module.exports = router;
