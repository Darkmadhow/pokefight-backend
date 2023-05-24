const express = require("express");
const { saveGame, getGames } = require("../controllers/game");
const gameRouter = express.Router();

gameRouter.post("/save", saveGame);
gameRouter.get("/leaderboard", getGames);
module.exports = gameRouter;
