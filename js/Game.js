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

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

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

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
     won */

    checkForWin() {
        const hideLetter = document.querySelectorAll('.hide');
        console.log(hideLetter.length);
             if (hideLetter.length > 0){
            return false;
        } else {
            this.gameOver(true);

        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

    removeLife(){
        console.log(this.checkForWin());
        if (this.checkForWin() === true){
            console.log('YOU WON');
            game.gameOver(this.checkForWin())
            // this.missed += 1;
            // let heartImage = document.querySelector('img[src="images/liveHeart.png"]').src="../images/lostHeart.png";
        } else if (this.checkForWin() === false && this.missed < 4) {
            this.missed += 1;
            let heartImage = document.querySelector('img[src="../images/liveHeart.png"]').src="../images/lostHeart.png";
        } else if (this.checkForWin() === false && this.missed >= 4){
            game.gameOver(this.checkForWin());
            console.log('Game Over');
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */

    gameOver(gameWon){
        console.log(gameWon);
        const overlay = document.getElementById('overlay');
        const h1Text = document.getElementById('game-over-message');
        overlay.style.display = '';
        if (gameWon === true){
            h1Text.innerText = 'You won!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            this.resetGame();
        } else {
            h1Text.innerText = 'You lost :(';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            this.resetGame();
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */

    handleInteraction(button){
        console.log(button);
         // const hideLetter = document.querySelector('.hide');
         // console.log(event.target);
         const disableKey = button.target;
             disableKey.disabled = true;
         // for (let i = 0; i < hideLetter.length; i++) {
             const letterKey = event.target.innerText;
             console.log(letterKey); //output t
         const activePhrase = this.activePhrase;
         console.log(activePhrase)
        const activePhraseSplit = activePhrase.phrase.split('');
        console.log(activePhraseSplit)
        const phraseLetter = activePhraseSplit.includes(letterKey);
        // console.log(phraseLetter);
             if (!phraseLetter) {
                 // console.log('no match');
                 disableKey.classList.add('wrong');
                 this.removeLife();

             } else {
                 // console.log('yes match');
                 disableKey.classList.add('chosen');
                 this.activePhrase.showMatchedLetter(letterKey);
                 this.checkForWin();
                 // console.log(this.checkForWin());
                 if (!this.checkForWin){
                     this.gameOver(this.checkForWin);
                 }
             }
        }
        resetGame() {
            function removeUL(){
                const phraseID = document.getElementById("phrase");
                const ul = phraseID.firstElementChild;
                while(ul.firstChild){
                    ul.removeChild(ul.firstChild);
                }
            }

            function resetKeys(){
                const keyRow = document.querySelectorAll('.key');
            // console.log(keyRow);
                for (let i = 0; i < keyRow.length; i++){
                    // console.log(keyRow[i]);
                    if (keyRow[i].className === 'key wrong'){
                        keyRow[i].classList.remove('wrong');
                        // console.log('YES KEY WRONG');
                    } else if (keyRow[i].className === 'key chosen') {
                        keyRow[i].classList.remove('chosen');
                        // console.log('YES KEY CHOSEN');
                    } else{
                        // console.log("ALL GOOD");
                    }
                }

            }

            function disableKeyRemove(){
                const keyRow = document.querySelectorAll('.key');
                for (let i = 0; i < keyRow.length; i++){
                    keyRow[i].disabled = false;
                }
            }

            function resetHearts(){
                let heartImage = document.querySelectorAll('img');
                console.log(heartImage);
                for (let i = 0; i < heartImage.length; i++){
                    console.log(heartImage[i]);
                    heartImage[i].src="../images/liveHeart.png"
                }
            }

            removeUL();
            resetKeys();
            disableKeyRemove();
            resetHearts();
            }


    }
