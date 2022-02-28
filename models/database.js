const { Schema, model } = require("mongoose");

const databaseSchema = new Schema(
  {
    title: { type: String },
    genre: { type: String },
    thumbnail: { type: String },
    platform: { type: String },
  },
  { collection: "database" }
);

const Database = model("Database", databaseSchema);

module.exports = Database;
