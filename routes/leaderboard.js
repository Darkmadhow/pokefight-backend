const express = require("express");
const { uploadScore, getLeaderboard } = require("../controllers/leaderboard");
const pokemonRouter = express.Router();

pokemonRouter.post("/", uploadScore);
pokemonRouter.get("/", getLeaderboard);

module.exports = pokemonRouter;
