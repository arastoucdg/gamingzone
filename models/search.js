const { Schema, model } = require("mongoose");

const searchSchema = new Schema(
  {
    title: { type: String },
    genre: { type: String },
    thumbnail: { type: String },
    platform: { type: String },

    release_date: { type: String },
  },
  { collection: "database" }
);

const searchSchema = model("searchSchema", searchSchema);

module.exports = ProductInfo;
