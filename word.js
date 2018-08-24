var Letter = require("./letter.js");

Word = function(word){
    this.letters = word.split("");
    for (i=0; i<this.letters.length; i++){
        this.letters[i] = new Letter(this.letters[i]);
    }
    this.guess = function(guessedLetter){
        this.letters.forEach(function(letter){
            letter.guess(guessedLetter);
        });
    }
}

Word.prototype.toString = function (){
    return this.letters.join(" ");
}

module.exports = Word;