const mongoose = require("mongoose");
const CouponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an Name"],
    },
    icon: {
      type: String,
      required: [true, "Please add an Icon"],
    },
    percentage: {
      type: Number,
      required: [true, "Please add an Icon"],
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    expirateAt: {
      type: Date,
    },
 products: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: [true, "Please add an Product"],
    },
 place: {
      type: mongoose.Types.ObjectId,
      ref: "Place",
      required: [true, "Please add an Place"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Coupon", CouponSchema);
