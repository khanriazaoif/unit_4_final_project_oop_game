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

    checkForWin() {
        const letter = document.querySelectorAll('.letter');
        if (letter.matches(".letter")){
            return false;
        } else {
            return true;
        }
    }

    removeLife(){
        console.log(this.checkForWin());
        if (this.checkForWin() === false && this.missed < 5){
            this.missed += 1;
            // const triesHearts = document.querySelector('.tries');
            // triesHearts.nextElementSibling.classList.add('hello');
            let heartImage = document.querySelector('img[src="images/liveHeart.png"]').src="../images/lostHeart.png";
        } else {
            console.log('Game Over');
            game.gameOver(true);
        }
    }

    handleInteraction(event){
        this.activePhrase.checkLetter(event.target.textContent);
        console.log(this.activePhrase);

    }

    // checkForWin(){
    //     const hideLetter = document.querySelector('.hide');
    //     console.log(hideLetter);
    //     if (hideLetter.matches(".hide")){
    //         return false;
    //     } else {
    //         return true;
    //     }
    //
    // }



    gameOver(gameWon){
        console.log(gameWon);
        const overlay = document.getElementById('overlay');
        const h1Text = document.getElementById('game-over-message');
        overlay.style.display = '';
        if (gameWon === true){
            h1Text.innerText = 'You won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            h1Text.innerText = 'You lost :(';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
    }

    // handleInteraction(event){
    //     const hideLetter = document.querySelectorAll('.hide');
    //     for (let i = 0; i < hideLetter.length; i++){
    //
    //
    //     console.log(hideLetter[i].innerHTML);
    //     const disableKey = event.target;
    //     // console.log(disableKey);
    //     disableKey.disabled = true;
    //     const letterKey = event.target.innerText;
    //     console.log(letterKey);
    //     if (letterKey !==  hideLetter[i].innerHTML){
    //         console.log('no match');
    //             disableKey.classList.add('wrong');
    //         this.removeLife();
    //
    //     } else {
    //         console.log('yes match');
    //         disableKey.classList.add('chosen');
    //         this.activePhrase.showMatchedLetter(letterKey);
    //         this.checkForWin();
    //     }
    //     }
    // }

}
