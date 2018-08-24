var request = require("request");
var prompt = require("prompt");
var colors = require("colors/safe");
var Word = require("./word.js");

var guessSchema = {
  properties: {
    guess: {
      pattern: /^[a-zA-Z]{1}$/,
      description: colors.yellow("Make a Guess"),
      message: 'Please guess a letter!',
      required: true
    },
  }
};

prompt.message = "";
prompt.delimiter = colors.yellow(":");

var promptGuess = (word) => {
  console.log(word + "");
  prompt.start();
  prompt.get(guessSchema, function (err, result) {
    if (err) {
      console.log(colors.red("Something went wrong"));
      process.exit();
    }
    var guessedLetter = result.guess;
    if (word.guess(guessedLetter)) {
      console.log(colors.cyan("CORRECT!"));
    }
    else {
      console.log(colors.magenta("TRY AGAIN"));
    }
    if (word.remaining === 0) {
      console.log(colors.rainbow("CONGRATULATIONS"));
      console.log(colors.cyan(word + ""));
      start(false);
    }
    else {
      promptGuess(word);
    }
  });
}

var newGame = () => {
  console.log(colors.magenta("A Pokemon is being chosen..."));
  var number = Math.floor(Math.random() * 807);
  request("https://pokeapi.co/api/v2/pokemon/" + number, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      let pokemon = JSON.parse(body).name;
      promptGuess(new Word(pokemon));
    }
    else {
      console.log(colors.red("Something went wrong"));
      process.exit();
    }
  });
}

var start = (first) => {
  if (first) {
    console.log(colors.rainbow("Welcome to the Pokemon Guessing Game 2.0"));
    newGame();
  }
  else {
    prompt.start();
    prompt.get({
      properties: {
        newGame: {
          pattern: /Y|N|y|n{1}/,
          description: colors.yellow("Start a new game (Y/N)"),
          message: 'Please choose Y/N',
          required: true
        }
      }
    }, function (err, result) {
      if (err) {
        console.log(colors.red("Something went wrong"));
        process.exit();
      }
      var choice = result.newGame.toUpperCase();
      if (choice === "Y") {
        newGame();
      }
      else {
        console.log(colors.green("Thanks for playing!"));
        process.exit();
      }
    });
  }
}

start(true);