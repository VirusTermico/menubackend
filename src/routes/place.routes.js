const express = require("express");
const { protect, authorize } = require("../middlewares/auth");

const {
  getPlaces,
  getPlace,
  addPlace,
  updatePlace,
  deletePlace,
  uploadPhoto,
} = require("../controllers/place.controller");

const PlaceModel = require("../models/place.model");
const advancedResults = require("../middlewares/advancedResult");
const categoryRoute = require("./category.routes");
const extraRoute = require("./extra.routes");
const productRoute = require("./product.routes");
const orderRoute = require("./order.routes");
const authRoute = require("./auth.routes");
const { getPlaceUsers } = require("../controllers/auth.controller");

const router = express.Router();
router.use("/:placeId/categories", categoryRoute);
router.use("/:placeId/extras", extraRoute);
router.use("/:placeId/products", productRoute);
router.use("/:placeId/orders", orderRoute);
router.use("/:placeId/users", authRoute);

router
  .route("/")
  .get(
    protect,
    advancedResults(PlaceModel, {
      path: "categories",
      select: "title icon place user products",
    }),
    getPlaces
  )
  .post(protect, authorize("admin", "manager"), addPlace);

router
  .route("/:id/photo")
  .put(protect, authorize("admin", "manager"), uploadPhoto);

router
  .route("/:id/users")
  .get(protect, authorize("admin", "manager"), getPlaceUsers);
router
  .route("/:id")
  .get(getPlace)
  .patch(protect, authorize("admin", "manager"), updatePlace)
  .delete(protect, authorize("admin", "manager"), deletePlace);

module.exports = router;
