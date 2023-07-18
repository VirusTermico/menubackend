const express = require("express");
const {
getFavorites,
addToFavorites,
deleteFromFavorites,existInMyFavorites} = require("../controllers/favorite.controller");


const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middlewares/auth");


router
  .route("/")
  .get(
    protect,
    getFavorites
  )
  .post(protect,addToFavorites);

  router
  .route("/:productId")
  .get(protect, existInMyFavorites)
  .delete(protect, deleteFromFavorites);


module.exports = router;
