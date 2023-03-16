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
        let li = document.createElement("li");

        div.setAttribute("id", "phrase");
        div.className = "section";

        const phrase = this.phrase.split('');
        console.log(phrase);
        for (let i = 0; i < this.phrase.length; i++) {
            console.log(phrase[i]);
            if (phrase[i] === ` `){
                li.className = "space";
                ul.appendChild(li);
            } else {
                li.className = `hide letter ${phrase[i]}`;
                ul.appendChild(li);
                console.log(li);
            }


        }


    }

}
