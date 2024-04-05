const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const NewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "This title have to be added!!!"],
      validate: {
        validator: (value) => value.length > 5,
        message: "title must be at least 5 characters",
      },
    },
    author: {
      type: String,
      required: true,
    },
    imgTitle: {
      type: String,
      required: true,
    },
    heading: {
      type: [
        {
          nameHeading: {
            type: String,
            required: false,
          },
          image: {
            type: String,
            required: false,
          },
          content: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const New = mongoose.model("New", NewSchema);

module.exports = New;
