const ProductModel = require("../models/product.model");
const PlaceModel = require("../models/place.model");
const CategoryModel = require("../models/category.model");
const ExtraModel = require("../models/extra.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all products
// @route      Get  /api/v1/product
// @route      Get  /api/v1/places/:placeId/products
// @access     Public

exports.getProducts = asyncHandler(async (req, res, next) => {
  if (req.params.placeId) {
    const products = ProductModel.find({ place: req.params.placeId }).populate(
      "reviews"
    );

    res
      .status(200)
      .json({ sucess: true, count: extras.length, data: products });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc       Get single product
// @route      Get  /api/v1/products/:id
// @access     Public

exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id).populate({
    path: "reviews",
  });

  if (!product) {
    return next(
      new ErrorResponse(`Produto com id ${req.params.id} não existe`, 404)
    );
  }

  res.status(200).json({ sucess: true, data: product });
});

// @desc       Create new  product
// @route      Post  /api/v1/places/:placeId/products
// @access     Private

exports.addProduct = asyncHandler(async (req, res, next) => {
  req.body.place = req.params.placeId ? req.params.placeId : req.body.place;
  req.body.user = req.user._id;

  const { name, image, price, description, category, extra, user } = req.body;

  if (!name || !image || !price || !description | !category || !user) {
    return next(new ErrorResponse(`Preencha todos campos`, 400));
  }
  // const placeExist = await PlaceModel.findById(place);
  const catego = await CategoryModel.findById(category);

  if (!catego) {
    return next(
      new ErrorResponse(`Categoria com id ${category} não existe`, 404)
    );
  }

  //prevent a product to be added to a category of place
  if (catego.user.toString() !== req.user.id && req.user.role != "admin") {
    return next(
      new ErrorResponse(`Usuário ${req.user.id} não tem autorização`, 404)
    );
  }

  const product = await ProductModel.create(req.body);
  res.status(200).json({ sucess: true, data: product });
});

// @desc       Update   product
// @route      Patch  /api/v1/products/:productId
// @access     Private

exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await ProductModel.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`Produto com id ${req.params.id} não existe`, 404)
    );
  }

  const categoryAuxiliar = await CategoryModel.findById(product.category);
  if (!categoryAuxiliar) {
    return next(
      new ErrorResponse(`Categoria com id ${req.body.category} não existe`, 404)
    );
  }
  const userCategory = categoryAuxiliar.user;

  if (req.user.id != userCategory) {
    return next(
      new ErrorResponse(
        `Usuário ${req.user.id} não tem autorização para actualizar o produto ${req.params.id}`,
        404
      )
    );
  }

  if (req.body.category) {
    let category = await ProductModel.findById(req.body.category);

    if (!category) {
      return next(
        new ErrorResponse(
          `Categoria com id ${req.body.category} não existe`,
          404
        )
      );
    }

    if (
      category?.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return next(
        new ErrorResponse(
          `Usuário ${req.user.id} não tem autorização para actualizar o produto ${req.params.id}`,
          404
        )
      );
    }

    req.body.category = category.id;
  } else {
    req.body.category = categoryAuxiliar.id;
  }

  product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ sucess: true, data: product });
});

// @desc       Delete product
// @route      Delete  /api/v1/products/:productId
// @access     Private

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Produto com id ${req.params.id} não existe`, 404)
    );
  }

  const category = await CategoryModel.findById(product.category);

  if (category.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `Usuário ${req.user.id} não tem autorização para apagar o produto ${req.params.id}`,
        404
      )
    );
  }

  await product.remove();
  res.status(200).json({ sucess: true, data: {} });
});
