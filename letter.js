Letter = function(char){
    this.char = char;
    this.guessed = false;
    this.toString = function(){
        if (this.guessed){
            return char;
        }
        else{
            return "_";
        }
    }
    this.guess = function(guessedLetter){
        if(this.char === guessedLetter){
            this.guessed = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;