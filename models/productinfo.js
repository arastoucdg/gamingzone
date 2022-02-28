const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: { type: String },
    genre: { type: String },
    thumbnail: { type: String },
    platform: { type: String },
    short_description: { type: String },
    release_date: { type: String },
  },
  { collection: "database" }
);

const ProductInfo = model("ProductInfo", productSchema);

module.exports = ProductInfo;
