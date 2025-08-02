const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const serverless = require("serverless-http");
const propertyRouter = require("./routes/property");
const reviewsRouter = require("./routes/reviews");
require("dotenv").config();

const app = express();
dbConnect();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/property", propertyRouter);
app.use("/api/reviews", reviewsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);