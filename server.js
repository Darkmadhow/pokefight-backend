const express = require("express");
const app = express();
const cors = require("cors");
const pokemonRouter = require("./routes/pokemon");
const gameRouter = require("./routes/game");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use("/pokemon", pokemonRouter);
app.use("/game", gameRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
