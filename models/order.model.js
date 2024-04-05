const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    quantity: {
      type: [Number],
      required: [true, "Quantity have to be added!!!"],
    },

    item: [{ type: ObjectId, ref: "Product" }],

    user: { type: ObjectId, ref: "User" },

    totallCost: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
