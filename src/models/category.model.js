const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add an Title"],
    },
    icon: {
      type: String,
      required: [true, "Please add an Icon"],
    },

    createAt: {
      type: Date,
      default: Date.now,
    },

    place: {
      type: mongoose.Types.ObjectId,
      ref: "Place",
      required: [true, "Please add an Place"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please add an User"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


CategorySchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "category",
  justOne: false,
});



module.exports = mongoose.model("Category", CategorySchema);
