const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    id: { type: ObjectId },

    name: {
      type: String,
      required: [true, "This product name have to be added!!!"],
      validate: {
        validator: (value) => value.length > 5,
        message: "Username must be at least 5 characters",
      },
    },

    price: {
      type: Number,
      required: [true, "This product price have to be added!!!"],
    },
    image: {
      type: String,
      required: [true, "This product picture have to be added!!!"],
    },
    avalable: {
      type: Number,
      required: [true, "How many avalable item in storage"],
    },
    bought: {
      type: Number,
      required: [true, "How many avalable item in storage"],
      default: 0,
    },
    species: {
      type: [String],
      required: false,
    },
    describe: {
      type: String,
      required: false,
    },
    discount: {
      type: Number,
      required: false,
    },
    trademark: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
