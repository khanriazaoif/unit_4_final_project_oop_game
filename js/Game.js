/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("There is no I in team"),
            new Phrase("The Matrix has you"),
            new Phrase("May the Force be with you"),
            new Phrase("You have to see the Matrix for yourself")
        ],
        this.activePhrase = null

    }
    getRandomPhrase(){
            let i = Math.floor((Math.random() * 4));
            return this.phrases[i];
        }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     * startgame();
     */

    startGame(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        // console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(){

    }

    checkForWin(){
        // const phraseId = document.getElementById('phrase')//.firstChild.firstChild;
        // const ul = phraseId.firstElementChild.firstElementChild;
        // console.log(ul);
        const hideLetter = document.querySelector('.hide');
        console.log(hideLetter);
        if (hideLetter){
            return false;
        } else {
            return true;
        }

    }





}
