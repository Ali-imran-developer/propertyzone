const express = require("express");
const router = express.Router();
const { createProperty, getProperties, handleImageUpload } = require("../controllers/property");
const { upload } = require("../helpers/cloudinary");

router.post("/upload-image", upload.array("my_files", 10), handleImageUpload);
router.post("/create", createProperty);
router.get("/get", getProperties);

module.exports = router;