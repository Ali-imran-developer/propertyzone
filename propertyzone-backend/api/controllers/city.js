const City = require("../models/city");

const getCities = async (req, res) => {
  try {
    const cities = await City.find().sort({ name: 1 });
    res.status(200).json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.error("Error fetching city:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { getCities };