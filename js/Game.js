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
                "phrase": "May the Force be with you have to see the Matrix for yourself"
            }
        ],
        this.activePhrase = null
    }
}