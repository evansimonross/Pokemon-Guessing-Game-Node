Letter = function(char){
    this.char = " ";
    char = char.substring(0,1).toUpperCase();
    if(/^[a-zA-Z\s]{1}$/.test(char)){
        this.char = char;
    }
    this.guessed = false;
}

Letter.prototype.guess = function(guessedLetter){
    if(this.char === guessedLetter.toUpperCase()){
        this.guessed = true;
        return true;
    }
    return false;
}

Letter.prototype.toString = function (){
    if (this.guessed || this.char === " "){
        return this.char + "";
    }
    else{
        return "_";
    }
}

module.exports = Letter;