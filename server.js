const express = require("express");
const app = express();
const cors = require("cors");
const pokemonRouter = require("./routes/pokemon");
const gameRouter = require("./routes/game");
const leaderboardRouter = require("./routes/leaderboard");
const db = require("./mongoDB");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/pokemon", pokemonRouter);
app.use("/game", gameRouter);
app.use("/leaderboard", leaderboardRouter);

db();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
