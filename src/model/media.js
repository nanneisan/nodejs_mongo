const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediaSchema = new Schema(
  {
    mediaUrl: {
      type: String,
    },
    contentType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Media", MediaSchema);
