const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const UserModel = require("../models/user.model");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new ErrorResponse(
        `Não tem autorização para aceder esta rota, porfavor prove um tolen válido `,
        401
      )
    );
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decode.id);
    next();
  } catch (err) {
    return next(new ErrorResponse(`Não tem autorização para aceder esta rota, ${err.message} `, 401));
  }
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `Usuários do tipo  ${req.user.role}  não podem aceder esta rota`,
          403
        )
      );
    }
    next();
  };
};
