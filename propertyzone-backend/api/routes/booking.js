const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/booking");

router.post("/create", createBooking);

module.exports = router;