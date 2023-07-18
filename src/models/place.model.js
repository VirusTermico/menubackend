const mongoose = require("mongoose");
const PlaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an Name"],
    },
    cover: {
      type: String,
      required: [true, "Please add an Cover"],
    },
    description: {
      type: String,
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please use a valid URL with HTTP or HTTPS",
      ],
    },
    phone: {
      type: String,
    },
    number_of_tables: {
      type: Number,
      default:1
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

        "Please use a valid email",
      ],
    },
    address: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    owner: {
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


PlaceSchema.virtual("categories", {
  ref: "Category",
  localField: "_id",
  foreignField: "place",
  justOne: false,
});


module.exports = mongoose.model("Place", PlaceSchema);
