const express = require("express");
const router = express.Router();
const { getCities } = require("../controllers/city");

router.get("/getCities", getCities);

module.exports = router;