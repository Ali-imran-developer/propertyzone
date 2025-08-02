const express = require("express");
const router = express.Router();
const { createReviews, getReviews } = require("../controllers/reviews");

router.post("/create", createReviews);
router.get("/get", getReviews);

module.exports = router;