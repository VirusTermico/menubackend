const UserModel = require("../models/user.model");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");


exports.getPlaceUsers = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const users = await UserModel.find({
    place: req.params.id,
  });
  res
    .status(200)
    .json({ sucess: true, count: users.length, data: users });
});

// @desc       Registe an user
// @route      Post  /api/v1/auth/register
// @access     Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorResponse(`Please provide an email and password`, 400));
  }

  const user = await UserModel.create({ name, email, password, role });

  sendTokenResponse(user, 200, res);
});

// @desc       Login
// @route      Post  /api/v1/auth/login
// @access     Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse(`Por favor digite um usuário e a respectiva senha`, 400));
  }

  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse(`Usuário não existe`, 401));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse(`Usuário ou Senha inválidos `, 400));
  }

     
  sendTokenResponse(user, 200, res);

});

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if ((process.env.NODE_ENV = "production")) {
    options.secure = true;
  }

 
  setTimeout(() => {
       
    
  
    
  }, 5000);

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
  
};

// @desc       Get Me
// @route      Post  /api/v1/auth/me
// @access     private

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await UserModel.findById(req.user.id);
  res.status(200).json({
    success: true,
    data: user,
  });
});
