const express = require("express");
const OrderModel = require("../models/order.model");
const {
  getOrders,
  getOrder,
  makeOrder,
  changeOrderStatus,
  deleteOrder,
  listOrders,
  myOrders,
} = require("../controllers/order.controller");
const advancedResults = require("../middlewares/advancedResult");

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middlewares/auth");

const mostra = (req, res, next) => {
  console.log(req.body);
  console.log(req.headers);

  next();
};
router
  .route("/")
  .get(advancedResults(OrderModel), getOrders)
  .post(protect, makeOrder);

router.route("/my").get(protect, myOrders);

router
  .route("/:id")
  .get(advancedResults(OrderModel, "products.product"), getOrder)
  .patch(protect, authorize("admin", "manager"), changeOrderStatus)
  .delete(protect, authorize("admin", "manager"), deleteOrder);

module.exports = router;
