var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
var prompt = require("prompt");
var Word = require("./word.js");

var number = Math.floor(Math.random()*807);

P.getPokemonByName(number, function(response, error) { // with callback
    if(!error) {
        var pokemon = new Word(response.name);
      console.log(pokemon + "");
    } else {
      console.log(error)
    }
  });