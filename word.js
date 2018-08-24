var Letter = require("./letter.js");

Word = function(word){
    this.letters = word.split("");
    this.remaining = this.letters.length;
    for (i=0; i<this.letters.length; i++){
        this.letters[i] = new Letter(this.letters[i]);
        if(this.letters[i].char===" ") {
            this.remaining --;
        }
    }
}

Word.prototype.guess = function(guessedLetter){
    var correct = false;
    this.letters.forEach(function(letter){
        if(letter.guess(guessedLetter)){
            correct = true;
            this.remaining --;
        }
    });
    return correct;
}

Word.prototype.toString = function (){
    return this.letters.join(" ");
}

module.exports = Word;