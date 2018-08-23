Letter = function(char){
    this.char = char;
    this.guessed = false;
    this.display = function(){
        if (this.guessed){
            return char;
        }
        else{
            return "_";
        }
    }
    this.guess = function(guessedChar){
        if(this.char === guessedChar){
            this.guessed = true;
        }
    }
}