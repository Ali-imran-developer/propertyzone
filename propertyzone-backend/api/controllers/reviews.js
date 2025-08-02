const Reviews = require("../models/reviews");

const createReviews = async (req, res) => {
  try {
    const { name, email, website, comments } = req.body;
    const newReview = await Reviews.create({ name, email, website, comments });
    res.status(201).json({
      success: true,
      review: newReview,
      message: "Review created successfully!",
    });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find().sort({ createdAt: -1 });
    res.json({ success: true, reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  createReviews,
  getReviews,
};
