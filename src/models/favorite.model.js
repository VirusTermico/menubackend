const mongoose = require("mongoose");
const FavoriteSchema = new mongoose.Schema(
  {
    createAt: {
      type: Date,
      default: Date.now,
    },

    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: [true, "Please add an Product"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please add an User"],
    },
    place: {
      type: mongoose.Types.ObjectId,
      ref: "Place",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
FavoriteSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});


module.exports = mongoose.model("Favorite", FavoriteSchema);
