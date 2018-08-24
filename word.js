var Letter = require("./letter.js");

Word = function(word){
    this.letters = word.split("");
    for (i=0; i<this.letters.length; i++){
        this.letters[i] = new Letter(letters[i]);
    }
    this.toString = function(){
        return this.letters.join(" ");
    }
    this.guess = function(guessedLetter){
        this.letters.forEach(function(letter){
            letter.guess(guessedLetter);
        });
    }
}

module.exports = Word;