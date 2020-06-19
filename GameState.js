import Scores from "./Scores.js";

class GameState {
    constructor() {
        this.scores = new Scores();
        this.dices = [];
        this.images = {};
        this.rollsLeft = 3;
    }

    rollDices() {
        if (this.rollsLeft) {
            this.dices.forEach((dice) => dice.roll());
            this.rollsLeft--;
        }
    }

    resetRolls() {
        this.rollsLeft = 3;
        this.dices.forEach((dice) => dice.reset());
    }
}

export default GameState;
