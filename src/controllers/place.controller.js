const path = require("path");
const PlaceModel = require("../models/place.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc       Get all Places
// @route      Get  /api/v1/places
// @access     Public
exports.getPlaces = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "admin" && req.user.role !== "manager") {
    return next(
      new ErrorResponse(
        `Usuário ${req.user.id} não tem autorização para aceder está rota..`,
        404
      )
    );
  }

  if (req.user.role == "manager") {
    const places = await PlaceModel.find({ owner: req.user.id }).populate({
      path: "categories",
      populate: {
        path: "products",
      },
    });

    return res.status(200).json({ sucess: true, data: places });
  }

  res.status(200).json(res.advancedResults);
});

// @desc       Get single Place
// @route      Get  /api/v1/places/:id
// @access     Public
exports.getPlace = asyncHandler(async (req, res, next) => {
  const place = await PlaceModel.findById(req.params.id).populate({
    path: "categories",
    populate: {
      path: "products",
    },
  });

  if (!place) {
    return next(
      new ErrorResponse(
        `Estabelecimento com id ${req.params.id} não existe.`,
        404
      )
    );
  }

  res.status(200).json({ sucess: true, data: place });
});

// @desc       Create new  Place
// @route      Get  /api/v1/places
// @access     Private
exports.addPlace = asyncHandler(async (req, res, next) => {
  const { name, cover, phone, email, address, website, number_of_tables } =
    req.body;
  if (!name || !cover || !number_of_tables) {
    return next(new ErrorResponse(`Preencha todos campos`, 400));
  }
  try {
    req.body.owner = req.user.id;

    if (req.user.role !== "admin" && req.user.role !== "manager") {
      return next(
        new ErrorResponse(
          `Usuário ${req.params.id} não tem autorização para realizar a operação.`,
          404
        )
      );
    }

    const place = await PlaceModel.create(req.body);

    res.status(201).json({ sucess: true, msg: `data ${place}` });
  } catch (err) {
    next(err);
  }
});

// @desc       Update  Bootcamp
// @route      Patch  /api/v1/bootcamps/:id
// @access     Private
exports.updatePlace = asyncHandler(async (req, res, next) => {
  let place = await PlaceModel.findById(req.params.id);
  console.log(req.body)
  if (!place) {
    return next(
      new ErrorResponse(
        `Estabelecimento com id ${req.params.id} não existe.`,
        404
      )
    );
  }
  if (place.owner.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `Usuário ${req.params.id} não está autorizado actualizar este Estabelecimento.`,
        404
      )
    );
  }

  place = await PlaceModel.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucess: true, msg: `Update Place ${req.params.id}` });
});

// @desc       Delete single Bootcamp
// @route      Dlete  /api/v1/bootcamps/:id
// @access     Private

exports.deletePlace = asyncHandler(async (req, res, next) => {
  const place = await PlaceModel.findById(req.params.id);

  if (!place) {
    return next(
      new ErrorResponse(
        `Estabelecimento com id ${req.params.id} não existe.`,
        404
      )
    );
  }

  if (place.owner.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `Usuário ${req.params.id} não está autorizado a realizar a operação.`,
        404
      )
    );
  }
  place.remove();
  res.status(200).json({ sucess: true, msg: {} });
});

// @desc       Upload single Bootcamp
// @route      Dlete  /api/v1/bootcamps/:id/photo
// @access     Private

exports.uploadPhoto = asyncHandler(async (req, res, next) => {
  const place = await PlaceModel.findById(req.params.id);

  if (!place) {
    return next(
      new ErrorResponse(
        `Estabelecimento com id ${req.params.id} não existe`,
        404
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Porfavor selecione um ficheiro`, 404));
  }

  const file = req.files.file;

  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Porfavor selecione uma imagem`, 404));
  }

  if (!file.size > process.env.MAX_FILE_SIZE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Porfavor selecione uma imagem cujo tamanho seja inferior a ${process.env.MAX_FILE_SIZE_UPLOAD}`,
        404
      )
    );
  }

  //create custom file name

  file.name = `photo_${bootcamp._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      return next(
        new ErrorResponse(`Ocorreu um erro ao realizar operação `, 500)
      );
    }

    await PlaceModel.findByIdAndUpdate(req.params.id, { photo: file.name });
    res.status(200).json({ sucess: true, data: file.name });
  });
});
