const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "creationDate",
      updatedAt: "updateDate"
    },
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);



const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
