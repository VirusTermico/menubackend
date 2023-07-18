const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00a3e99165904be44219957ac266c301e6aaf478_full.jpg",
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  bi_number: {
    type: String,
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

      "Please use a valid email",
    ],
  },
  phone: {
    type: String,
    maxlength: [9, "phone can not be longer  than 9 characters"],
  },
  role: {
    type: String,
    enum: ["admin", "customer", "manager", "employer"],
    default: "customer",
  },
  password: {
    type: String,
    required: [true, "Please add a Password"],
    minlength: 6,
    select: false,
  },
  place: {
    type: mongoose.Types.ObjectId,
    ref: "Place",
  },

  resetPasswordToken: { type: String },
  resetPasswordExpirate: { type: String },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

//Encrypt the password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//Reverse populate with virtuals
UserSchema.virtual("booking", {
  ref: "Booking",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

module.exports = mongoose.model("User", UserSchema);
