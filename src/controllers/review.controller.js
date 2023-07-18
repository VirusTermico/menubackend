const ReviewModel = require("../models/review.model");
const ProductModel = require("../models/product.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all categories
// @route      Get  /api/v1/category
// @route      Get  /api/v1/bootcamps/:placeId/categories
// @access     Public

exports.getReviews = asyncHandler(async (req, res, next) => {
  if (req.params.productId) {
   // const reviews = await ReviewModel.find({ product: req.params.productId }).populate('user');
   const reviews = await ReviewModel.find({ product: req.params.productId })
   
    res
      .status(200)
      .json({ sucess: true, count: reviews.length, data: reviews });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc       Get single category
// @route      Get  /api/v1/category/:id
// @access     Public

exports.getReview = asyncHandler(async (req, res, next) => {
  const review = await ReviewModel.findById(req.params.id).populate({
    path: "user",
    select: "name ",
  });

  if (!review) {
    return next(
      new ErrorResponse(`Review not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ sucess: true, data: review });
});

// @desc       Create new  category
// @route      Post  /api/v1/bootcamps/:bootcampId/categorys
// @access     Private

exports.addReview = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await ProductModel.findById( req.body.product);

  if (!product) {
    return next(
      new ErrorResponse(
        `No product with the id of ${req.body.product}`,
        404
      )
    );
  }


  const review = await ReviewModel.create(req.body);
  res.status(200).json({ sucess: true, data: review });
});

// @desc       Update new  category
// @route      Patch  /api/v1/categorys/:categoryId
// @access     Private

exports.updateReview = asyncHandler(async (req, res, next) => {
  let review = await ReviewModel.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No Category with the id of ${req.params.id}`, 404)
    );
  }

  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to update review ${req.params.id}`,
        404
      )
    );
  }

  review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ sucess: true, data: review });
});

// @desc       Delete a  category
// @route      Delete  /api/v1/category/:categoryId
// @access     Private

exports.deleteReview = asyncHandler(async (req, res, next) => {
  const review = await ReviewModel.findById(req.params.id);

  if (!review) {
    return next(
      new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
    );
  }

  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to delete category ${req.params.id}`,
        404
      )
    );
  }

  await review.remove();
  res.status(200).json({ sucess: true, data: {} });
});
