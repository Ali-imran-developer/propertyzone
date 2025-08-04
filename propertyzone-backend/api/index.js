const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const serverless = require("serverless-http");
const authRouter = require("./routes/auth");
const propertyRouter = require("./routes/property");
const reviewsRouter = require("./routes/reviews");
const blogsRouter = require("./routes/blogs");
const bookingRouter = require("./routes/booking");
const contactRouter = require("./routes/contact");
const cityRouter = require("./routes/city");
require("dotenv").config();

const app = express();
dbConnect();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/auth", authRouter);
app.use("/api/property", propertyRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/contact", contactRouter);
app.use("/api/city", cityRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);