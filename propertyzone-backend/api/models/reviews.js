const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    comments: { type: String, required: true },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("Reviews", ReviewSchema);
module.exports = Reviews;