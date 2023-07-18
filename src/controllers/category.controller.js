const CategoryModel = require("../models/category.model");
const PlaceModel = require("../models/place.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all categories
// @route      Get  /api/v1/category
// @route      Get  /api/v1/bootcamps/:placeId/categories
// @access     Public

exports.getCategories = asyncHandler(async (req, res, next) => {
  if (req.params.placeId) {
    const categories = await CategoryModel.find({
      place: req.params.placeId,
    }).populate("products");
    res
      .status(200)
      .json({ sucess: true, count: categories.length, data: categories });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc       Get single category
// @route      Get  /api/v1/category/:id
// @access     Public

exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await CategoryModel.findById(req.params.id)
    .populate({
      path: "place",
      select: "name",
    })
    .populate({
      path: "products",
    });

  if (!category) {
    return next(
      new ErrorResponse(`Category not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ sucess: true, data: category });
});

// @desc       Create new  category
// @route      Post  /api/v1/bootcamps/:bootcampId/categorys
// @access     Private

exports.addCategory = asyncHandler(async (req, res, next) => {
  //place id
  req.body.place = req.params.placeId? req.params.placeId:req.body.place;

  //category owner
  req.body.user = req.user.id;

  const place = await PlaceModel.findById( req.body.place);

  if (!place) {
    return next(
      new ErrorResponse(`Estabelecimento com id ${req.params.placeId} não existe`, 404)
    );
  }


  if (place.owner.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `Usuário ${req.user.id} não tem autorização para adicionar categoria neste estabelecimento`,
        404
      )
    );
  }

  const category = await CategoryModel.create(req.body);
  res.status(200).json({ sucess: true, data: category });
});

// @desc       Update new  category
// @route      Patch  /api/v1/categorys/:categoryId
// @access     Private

exports.updateCategory = asyncHandler(async (req, res, next) => {
  let category = await CategoryModel.findById(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(`No Category with the id of ${req.params.id}`, 404)
    );
  }

  if (category.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to update category ${req.params.id}`,
        404
      )
    );
  }

  category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ sucess: true, data: category });
});

// @desc       Delete a  category
// @route      Delete  /api/v1/category/:categoryId
// @access     Private

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await CategoryModel.findById(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(`No category with the id of ${req.params.id}`, 404)
    );
  }

  if (category.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to delete category ${req.params.id}`,
        404
      )
    );
  }

  await category.remove();
  res.status(200).json({ sucess: true, data: {} });
});
