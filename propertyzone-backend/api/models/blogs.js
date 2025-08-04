const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    creator: { type: String, required: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    para1: { type: String },
    para2: { type: String },
    createdAt: { type: String, required: true },
    detail: [
      {
        title: { type: String },
        para: { type: String },
      },
    ],
  },
  { timestamps: false }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;