const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const UserSchema = mongoose.Schema(
  {
    id: { type: ObjectId },

    username: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 8,
        message: "Username must be at least 8 characters",
      },
    },

    password: {
      type: String,
      required: [true, "This password have to be added!!!"],
    },
    email: {
      type: String,
      required: [true, "This email have to be added!!!"],
    },
    phone: {
      type: String,
      required: [true, "This phone have to be added!!!"],
    },
    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
