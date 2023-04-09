/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */    ``


let game = '';

const btnReset = document.getElementById('btn__reset')
// console.log(btnReset);
btnReset.addEventListener('click', ()=> {
    game = new Game();
    game.startGame();
});

const onscreenKeyboard = document.querySelectorAll('.key');

for (let i = 0; i < onscreenKeyboard.length; i++){
    onscreenKeyboard[i].addEventListener('click', (event)=> {
        // console.log('button pushed');
        console.log(event.target);
        game.handleInteraction(event);
    });
}
