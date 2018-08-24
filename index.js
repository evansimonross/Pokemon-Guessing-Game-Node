var request = require("request");
var prompt = require("prompt");
var Word = require("./word.js");

var guessSchema = {
  properties: {
    guess: {
      pattern: /^[a-zA-Z]{1}$/,
      message: 'Please guess a letter!',
      required: true
    },
  }
};

var promptGuess = (word) => {
  console.log(word + "");
  prompt.start();
  prompt.get(guessSchema, function (err, result) {
    var guessedLetter = result.guess;
    if (word.guess(guessedLetter)) {
      console.log("CORRECT!");
    }
    else {
      console.log("TRY AGAIN");
    }
    if (word.remaining === 0) {
      console.log("CONGRATULATIONS");
    }
    else {
      promptGuess(word);
    }
  });
}

var newGame = () => {
  console.log("Welcome to the Pokemon Guessing Game 2.0");
  var number = Math.floor(Math.random() * 807);
  request("https://pokeapi.co/api/v2/pokemon/" + number, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      let pokemon = JSON.parse(body).name;
      promptGuess(new Word(pokemon));
    }
  });
}

newGame();