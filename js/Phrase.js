/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */

    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').querySelector('ul');

        const phrase = this.phrase.split('');
        // console.log(phrase);
        for (let i = 0; i < phrase.length; i++) {
            let li = document.createElement("li");
            if (phrase[i] === ' '){
                li.className = "space";
                ul.appendChild(li);
                li.innerText = ' ';
                // console.log(ul);
                // console.log(li);
            } else {
                li.className = `hide letter ${phrase[i]}`;
                ul.appendChild(li);
                li.innerText = `${phrase[i]}`;
                // console.log(ul);
                // console.log(li);
            }

        }


    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    checkLetter(event) {
        // console.log("checkLetter:", event);
        const phrase = this.phrase.split('');
        console.log(phrase);

        if (phrase.includes(event)) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(event){
        const s = event;
        console.log(s);
        const hideLetter = document.querySelectorAll(".hide.letter"+'.'+s);
        for (let i = 0; i < hideLetter.length; i++)
        {
            console.log(hideLetter[0]);

            hideLetter[i].classList.remove('hide');
            hideLetter[i].classList.add('show');
        }
    }

}


