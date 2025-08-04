const express = require("express");
const router = express.Router();
const { getBlogs } = require("../controllers/blogs");

router.get("/get", getBlogs);

module.exports = router;