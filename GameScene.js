import Text from "./Components/Text.js";
import { TextButton } from "./Components/Button.js";
import Dice from "./Dice.js";
import Category from "./Category.js";

class GameScene {
    constructor(gameState) {
        this.gameState = gameState;
        this.totalScoreText = new Text(300, 50, "", 20, null, true);

        // //upper section
        this.upperSectionTitle = new Text(50, 100, "Upper section", 16);

        this.fivesCategory = new Category(50, 150, "Fives");
        this.fivesCategory.selectButton.click = () => {
            gameState.scores.setFivesScore(gameState.dices);
            gameState.resetRolls();
        };

        // //lower section
        this.lowerSectionTitle = new Text(350, 100, "Lower section", 16);

        this.onePairCategory = new Category(350, 150, "One Pair");
        this.onePairCategory.selectButton.click = () => {
            gameState.scores.setOnePairScore(gameState.dices);
            gameState.resetRolls();
        };

        this.chanceCategory = new Category(350, 200, "Chance");
        this.chanceCategory.selectButton.click = () => {
            gameState.scores.setChanceScore(gameState.dices);
            gameState.resetRolls();
        };

        //dices
        gameState.dices.push(new Dice(50, 400, 50, 50, gameState.images["dice"]));
        gameState.dices.push(new Dice(150, 400, 50, 50, gameState.images["dice"]));
        gameState.dices.push(new Dice(250, 400, 50, 50, gameState.images["dice"]));
        gameState.dices.push(new Dice(350, 400, 50, 50, gameState.images["dice"]));
        gameState.dices.push(new Dice(450, 400, 50, 50, gameState.images["dice"]));

        this.rollButton = new TextButton(200, 500, 200, 50, "Roll");
        this.rollButton.click = () => {
            gameState.rollDices();
        };
    }

    update(mouseHandler) {
        this.totalScoreText.text = `Total score: ${this.gameState.scores.totalScore}`;

        this.fivesCategory.update(mouseHandler, this.gameState.rollsLeft, this.gameState.scores.fivesScore);
        this.onePairCategory.update(mouseHandler, this.gameState.rollsLeft, this.gameState.scores.onePairScore);
        this.chanceCategory.update(mouseHandler, this.gameState.rollsLeft, this.gameState.scores.chanceScore);

        this.gameState.dices.forEach((dice) => dice.update(mouseHandler));

        this.rollButton.isVisable = !!this.gameState.rollsLeft;
        this.rollButton.update(mouseHandler);
    }

    render(renderer) {
        this.totalScoreText.render(renderer);

        this.upperSectionTitle.render(renderer);
        this.lowerSectionTitle.render(renderer);

        this.fivesCategory.render(renderer);
        this.onePairCategory.render(renderer);
        this.chanceCategory.render(renderer);

        this.gameState.dices.forEach((dice) => dice.render(renderer));

        this.rollButton.render(renderer);
    }
}

export default GameScene;
