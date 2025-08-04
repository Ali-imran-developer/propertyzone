const Blog = require("../models/blogs");

// const createBlogs = async () => {
//   try {
//     await Blog.insertMany(blogData);
//     console.log("Blogs seeded successfully!");
//     process.exit(0);
//   } catch (error) {
//     console.error("Seeding failed:", error);
//     process.exit(1);
//   }
// };

// createBlogs();

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { getBlogs };