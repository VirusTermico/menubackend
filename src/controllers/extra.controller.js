const ExtraModel = require("../models/extra.model");
const PlaceModel = require("../models/place.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all categories
// @route      Get  /api/v1/category
// @route      Get  /api/v1/bootcamps/:placeId/categories
// @access     Public

exports.getExtras = asyncHandler(async (req, res, next) => {
  if (req.params.placeId) {
    const extras = ExtraModel.find({ place: req.params.placeId });
    res
      .status(200)
      .json({ sucess: true, count: extras.length, data: extras });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc       Get single category
// @route      Get  /api/v1/category/:id
// @access     Public

exports.getExtra = asyncHandler(async (req, res, next) => {
  const extra = await ExtraModel.findById(req.params.id).populate({
    path: "place",
    select: "name",
  });

  if (!extra) {
    return next(
      new ErrorResponse(`Extra not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ sucess: true, data: extra });
});

// @desc       Create new  category
// @route      Post  /api/v1/bootcamps/:bootcampId/categorys
// @access     Private

exports.addExtra = asyncHandler(async (req, res, next) => {
  req.body.place = req.params.placeId;

  req.body.user = req.user.id;
  const place = await PlaceModel.findById(req.params.placeId);

  if (!place) {
    return next(
      new ErrorResponse(`No place with the id of ${req.params.placeId}`, 404)
    );
  }

  if (
    place.owner.toString() !== req.user.id &&
    req.user.role !== "admin" &&
    req.user.role !== "manager"
  ) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is  not authorized to add category to  this place`,
        404
      )
    );
  }

  const {name,icon,price}=req.body
  console.log(name,icon,price)
  const extra = await ExtraModel.create(req.body);
  res.status(200).json({ sucess: true, data: extra });
});

// @desc       Update new  category
// @route      Patch  /api/v1/categorys/:categoryId
// @access     Private

exports.updateExtra = asyncHandler(async (req, res, next) => {
  let extra = await ExtraModel.findById(req.params.id);

  if (!extra) {
    return next(
      new ErrorResponse(`No Extra with the id of ${req.params.id}`, 404)
    );
  }

  if (extra.place.owner.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to update category ${req.params.id}`,
        404
      )
    );
  }

  extra = await ExtraModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ sucess: true, data: extra });
});

// @desc       Delete a  category
// @route      Delete  /api/v1/category/:categoryId
// @access     Private

exports.deleteExtra = asyncHandler(async (req, res, next) => {
  const extra = await ExtraModel.findById(req.params.id);

  if (!extra) {
    return next(
      new ErrorResponse(`No Extra with the id of ${req.params.id}`, 404)
    );
  }

  if (extra.place.owner.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is  not authorized to delete category ${req.params.id}`,
        404
      )
    );
  }

  await extra.remove();
  res.status(200).json({ sucess: true, data: {} });
});
