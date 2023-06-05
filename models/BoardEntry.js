const mongoose = require("mongoose");
const { Schema } = mongoose;

const BoardEntry = new Schema({
  winner: { name: String, image: String },
  loser: { name: String, image: String },
  victory: Boolean,
  round: Number,
  score: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("boardentry", BoardEntry, "leaderboardentries");
