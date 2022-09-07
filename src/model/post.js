const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      ref: "Media",
    },
  },
  {
    timestamps: true,
  }
);
PostSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

PostSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Post", PostSchema);
