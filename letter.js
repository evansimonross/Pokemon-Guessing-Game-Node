Letter = function(char){
    this.char = char;
    this.guessed = false;
    this.guess = function(guessedLetter){
        if(this.char === guessedLetter){
            this.guessed = true;
            return true;
        }
        return false;
    }
}

Letter.prototype.toString = function (){
    if (this.guessed){
        return this.char + "";
    }
    else{
        return "_";
    }
}

module.exports = Letter;