const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
 
    body: {
      type: String,
      required: [true, "Please add a Body"],
    },
    rating: {
      type: Number,
      required:true,
     },
    createAt: {
      type: Date,
      default: Date.now,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: [true, "Please add a Product"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);






module.exports = new mongoose.model("Review", ReviewSchema);
