const pokemonData = require("../pokedex.json");

function getAllPokemon(req, res) {
  res.send(pokemonData);
}

function getPokemonById(req, res) {
  const pokeId = req.params.id;
  res.send(pokemonData.find((pokemon) => pokemon.id == pokeId));
}

module.exports = { getAllPokemon, getPokemonById };
