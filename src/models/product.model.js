const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an Name"],
    },
    image: {
      type: String,
      required: [true, "Please add an Image"],
    },
    description: {
      type: String,
      required: [true, "Please add an description"],
    },
    price: {
      type: Number,
      required: [true, "Please add an Price"],
    },
    tags: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true,
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must  be at least  1"],
      max: [5, "Rating can not be longer than 10"],
    },

    createAt: {
      type: Date,
      default: Date.now,
    },

    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "Please add an Category"],
    },
    place: {
      type: mongoose.Types.ObjectId,
      ref: "Place",
    },
    extras: {
      type: mongoose.Types.ObjectId,
      ref: "Extra",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProductSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});




module.exports = mongoose.model("Product", ProductSchema);
