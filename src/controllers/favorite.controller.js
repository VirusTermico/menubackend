const ProductModel = require("../models/product.model");
const PlaceModel = require("../models/place.model");
const FavoriteModel = require("../models/favorite.model");
const UserModel = require("../models/user.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all products
// @route      Get  /api/v1/product
// @route      Get  /api/v1/places/:placeId/products
// @access     Public

exports.getFavorites = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const { place, user } = req.body;

  const favorites = await FavoriteModel.find({
    user: user,
  }).populate("product");
  res
    .status(200)
    .json({ sucess: true, count: favorites.length, data: favorites });
});

// @desc       Create new  product
// @route      Post  /api/v1/places/:placeId/products
// @access     Private

exports.addToFavorites = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const { product, user } = req.body;

  if (!product || !user) {
    return next(new ErrorResponse(`Preencha todos campos`, 400));
  }
  // const placeExist = await PlaceModel.findById(place);
  const productExist = await ProductModel.findById(product);

  if (!productExist) {
    return next(new ErrorResponse(`Produto com id ${product} não existe`, 404));
  }
  // const placeExist = await PlaceModel.findById(place);

  // const placeExist = await PlaceModel.findById(place);
  const userExist = await UserModel.findById(user);

  if (!userExist) {
    return next(new ErrorResponse(`Usuário com id ${product} não existe`, 404));
  }

  const alredyExist = await FavoriteModel.findOne({
    user: userExist.id,
    product: productExist.id,
  });

  if (alredyExist) {
    return next(new ErrorResponse(`Já está nos favoritos `, 404));
  }

  //prevent a product to be added to a category of place

  const favorite = await FavoriteModel.create(req.body);
  res.status(200).json({ sucess: true, data: favorite });
});

// @desc       Delete product
// @route      Delete  /api/v1/products/:productId
// @access     Private

exports.deleteFromFavorites = asyncHandler(async (req, res, next) => {
  console.log(req.user._id.toString());
  const existInFavorist = await FavoriteModel.findOne({
    user: req.user._id.toString(),
    product: req.params.productId,
  });

  if (!existInFavorist) {
    return next(new ErrorResponse(`Não faz parte dos favoritos`, 404));
  }

  await existInFavorist.remove();
  res.status(200).json({ sucess: true, data: {} });
});

exports.existInMyFavorites = asyncHandler(async (req, res, next) => {
  const existInFavorist = await FavoriteModel.findOne({
    user: req.user._id.toString(),
    product: req.params.productId,
  });

  if (!existInFavorist) {
   return res.status(200).json({ sucess: false });
  }

  res.status(200).json({ sucess: true });
});
