const express = require("express");
const { getAllPokemon, getPokemonById } = require("../controllers/pokemon");
const pokemonRouter = express.Router();

pokemonRouter.get("/", getAllPokemon);
pokemonRouter.get("/:id", getPokemonById);

module.exports = pokemonRouter;
