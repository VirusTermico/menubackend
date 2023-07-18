const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["ESPERA", "PREPARAÇÃO", "PRONTO", "CANCELADO","ENTREGUE"],
    default: "ESPERA",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  reason: {
    type: String,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
      note: {
        type: String,
      },
    }],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please add an User"],
  },
});

module.exports = mongoose.model("Order", OrderSchema);
