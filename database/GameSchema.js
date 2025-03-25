const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: String,
  description: String,
  engine: String,
  platform: String,
  downloadLink: String
});

const Game = mongoose.model("Infos", gameSchema);

module.exports = Game;