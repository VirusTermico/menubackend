const mongoose = require("mongoose");
const ExtraSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an Name"],
    },
    icon: {
      type: String,
      required: [true, "Please add an Icon"],
    },
    price: {
      type: Number,
      required: [true, "Please add a Price"],
    },
    status: {
      type: Boolean,
      default:true,
      required: [true, "Please add an status"],
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Extra", ExtraSchema);
