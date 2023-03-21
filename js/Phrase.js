/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').querySelector('ul');
        console.log(ul);
        // let div = document.createElement("div");
        // let ul = document.createElement("ul");
        // div.setAttribute("id", "phrase");
        // div.className = "section";

        const phrase = this.phrase.split('');
        // console.log(phrase);
        for (let i = 0; i < phrase.length; i++) {
            let li = document.createElement("li");
            if (phrase[i] === ' '){
                li.className = "space";
                ul.appendChild(li);
                li.innerText = ' ';
                // console.log(ul);
                console.log(li);
            } else {
                li.className = `hide letter ${phrase[i]}`;
                ul.appendChild(li);
                li.innerText = `${phrase[i]}`;
                // console.log(ul);
                console.log(li);
            }


        }


    }
    checkLetter(letter){
        console.log(letter);
        console.log(this.phrase);
        const phrase = this.phrase.split('');
        // console.log(phrase);
        for (let i = 0; i < phrase.length; i++) {
            // console.log(phrase[i])
            if (letter === phrase[i]){
                return letter;
            } else {
                console.log('NO');
            }
        }
    }

    showMatchedLetter(letter){
        const s = letter;
        const hideLetter = document.querySelectorAll(".hide.letter"+'.'+s);
        for (let i = 0; i < hideLetter.length; i++)
        {
            console.log(hideLetter[0]);

            hideLetter[i].classList.remove('hide');
            hideLetter[i].classList.add('show');
        }
    }

}


