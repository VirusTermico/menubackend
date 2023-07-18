const OrderModel = require("../models/order.model");
const PlaceModel = require("../models/place.model");
const UserModel = require("../models/user.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all categories
// @route      Get  /api/v1/category
// @route      Get  /api/v1/bootcamps/:placeId/categories
// @access     Public

exports.getOrders = asyncHandler(async (req, res, next) => {
  const orders = await OrderModel.find({
    place: req.params.placeId,
  }).populate("products.product");

  const aux = [];
  orders.map((p) => {
    aux.push({
      id: p._id,
      table: p.table,
      status: p.status,
      createAt: p.createAt,
      products: p.products,
      user: p.user,
      __v: p.__v,
    });
  });
  res.status(200).json(aux);
});

// @desc       Get single category
// @route      Get  /api/v1/category/:id
// @access     Public

exports.getOrder = asyncHandler(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id).populate(
    "products.product"
  );

  res.status(200).json({ sucess: true, data: order });
});

// @desc       Create new  category
// @route      Post  /api/v1/bootcamps/:bootcampId/categorys
// @access     Private

exports.makeOrder = asyncHandler(async (req, res, next) => {
  //place id
  req.body.user = req.user.id;
  const { products, user, table } = req.body;
  console.log(req.body);
  if (!products || !user || !table) {
    return next(new ErrorResponse(`Preencha todos campos`, 400));
  }

  userExist = await UserModel.findById(req.body.user);

  if (!userExist) {
    return next(new ErrorResponse(`User  não existe`, 404));
  }

  const order = await OrderModel.create(req.body);
  //const orderDetail= await order.populate('products.product')

  const eventEmitter = req.app.get("eventEmitter");
  if (order) {
    eventEmitter.emit("orderPlaced", {
      order: order,
    });
  }

  res.status(200).json({ sucess: true, data: order });
});

// @desc       Update new  category
// @route      Patch  /api/v1/categorys/:categoryId
// @access     Private

exports.changeOrderStatus = asyncHandler(async (req, res, next) => {
  let order = await OrderModel.findById(req.params.id);
  if (!order) {
    return next(
      new ErrorResponse(`No Order with the id of ${req.params.id}`, 404)
    );
  }

  if (req.user.role !== "manager" && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to update category ${req.params.id}`,
        404
      )
    );
  }

  order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  const eventEmitter = req.app.get("eventEmitter");

  eventEmitter.emit("orderUpdated", {
    id: req.params.id,
    status: req.body.status,
    user: order.user.toString(),
  });

  res.status(200).json({ sucess: true, data: order });
});

// @desc       Delete a  category
// @route      Delete  /api/v1/category/:categoryId
// @access     Private

exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id);

  if (!order) {
    return next(
      new ErrorResponse(`No Order with the id of ${req.params.id}`, 404)
    );
  }

  if (order.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to delete category ${req.params.id}`,
        404
      )
    );
  }

  await order.remove();
  res.status(200).json({ sucess: true, data: {} });
});
exports.listOrders = asyncHandler(async (req, res, next) => {
  try {
    const orders = await OrderModel.find()
      .sort({ createdAt: 1 })
      .populate("products.product");

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
exports.myOrders = asyncHandler(async (req, res, next) => {
  try {
    req.body.user = req.user.id;

    const orders = await OrderModel.find({ user: req.body.user })
      .sort({ createdAt: 1 })
      .populate("products.product");

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
