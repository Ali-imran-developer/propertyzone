const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    images: [{ type: String, required: true }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: {
      address: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      zip: { type: Number },
    },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    floor: { type: Number },
    rooms: { type: Number },
    homeArea: { type: Number },
    builted: { type: Number },
    lotArea: { type: Number },
    lotDimensions: { type: Number },
    price: { type: Number },
    note: { type: String },
    status: { type: String },
    propertyId: { type: String, unique: true, required: true },
    area: {
      livingRoom: { type: Number },
      garage: { type: Number },
      dining: { type: Number },
      bedroom: { type: Number },
      bathroom: { type: Number },
      gym: { type: Number },
      garden: { type: Number },
      parking: { type: Number },
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;