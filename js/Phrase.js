/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        let div = document.createElement("div");
        let ul = document.createElement("ul");


        div.setAttribute("id", "phrase");
        div.className = "section";

        const phrase = this.phrase.split('');
        // console.log(phrase);
        for (let i = 0; i < phrase.length; i++) {
            let li = document.createElement("li");
            if (phrase[i] === ' '){
                li.className = "space";
                ul.appendChild(li);
                li.innerText = ' ';
                // console.log(li);
            } else {
                li.className = `hide letter ${phrase[i]}`;
                ul.appendChild(li);
                li.innerText = `${phrase[i]}`;
                // console.log(li);
            }


        }


    }

    checkLetter(){
        const qwerty = document.getElementById('qwerty');
        qwerty.addEventListener('click', (e) =>{
            const clickedLetter = e.target;
            console.log(clickedLetter);
            if (clickedLetter.innerText === `${phrase[i]}`){
                console.log('YES');
            } else {
                console.log('NO');
            }
        })
    }

}

