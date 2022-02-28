const { Schema, model } = require("mongoose");

const basketSchema = new Schema({
  title: { type: String },
  genre: { type: String },
  thumbnail: { type: String },
  platform: { type: String },
  short_description: { type: String },
  release_date: { type: String },
  game_url: { type: URL },
});

const BasketInfo = model("BasketInfo", basketSchema);

module.exports = BasketInfo;
