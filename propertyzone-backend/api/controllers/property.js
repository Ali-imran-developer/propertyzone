const { ImageUploadUtil } = require("../helpers/cloudinary");
const { generatePropertyId } = require("../helpers/generate-number");
const Property = require("../models/property");
const cloudinary = require("cloudinary").v2;

const handleImageUpload = async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }
    const uploadResults = await Promise.all(files.map(async (file) => {
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataUrl = "data:" + file.mimetype + ";base64," + b64;
      const result = await ImageUploadUtil(dataUrl);
      return result.secure_url;
    }));
    res.json({
      success: true,
      images: uploadResults,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while uploading images",
    });
  }
};

const createProperty = async (req, res) => {
  try {
    const {
      images,
      title,
      description,
      address,
      bedrooms,
      bathrooms,
      rooms,
      homeArea,
      builted,
      lotArea,
      floor,
      note,
      lotDimensions,
      price,
      status,
      area,
    } = req.body;
    let propertyId;
    let isUnique = false;
    while (!isUnique) {
      propertyId = generatePropertyId();
      const existing = await Property.findOne({ propertyId });
      if (!existing) isUnique = true;
    }
    const uploadedImages = await Promise.all(images.map(async (base64Img) => {
        const result = await cloudinary.uploader.upload(base64Img, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const newProperty = await Property.create({
      images: uploadedImages,
      title,
      description,
      address,
      bedrooms,
      bathrooms,
      rooms,
      homeArea,
      floor,
      note,
      builted,
      lotArea,
      lotDimensions,
      price,
      status,
      propertyId,
      area,
    });
    res.status(201).json({
      success: true,
      property: newProperty,
      message: "Property created Successfully!"
    });
  } catch (error) {
    console.log(error);
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

const getProperties = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
    const query = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { "address.address": { $regex: search, $options: "i" } },
        { "address.city": { $regex: search, $options: "i" } },
        { "address.country": { $regex: search, $options: "i" } },
      ],
    };
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const totalProperties = await Property.countDocuments(query);
    const properties = await Property.find(query).skip(skip).limit(parseInt(limit)).sort({ createdAt: -1 });
    res.json({
      success: true,
      page: parseInt(page),
      limit: parseInt(limit),
      totalProperties,
      properties,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  handleImageUpload,
  createProperty,
  getProperties,
};
