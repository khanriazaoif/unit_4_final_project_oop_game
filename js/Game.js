/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            {
                "phrase": "Life is like a box of chocolates"
            },
            {
                "phrase": "There is no I in team"
            },
            {
                "phrase": "The Matrix has you"
            },
            {
                "phrase": "May the Force be with you"
            },
            {
                "phrase": "You have to see the Matrix for yourself"
            }
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
        let getRandomPhrase = this.getRandomPhrase();
        console.log(getRandomPhrase);
        console.log(phrase.addPhraseToDisplay());
        this.activePhrase = phrase.addPhraseToDisplay;
    }

}
