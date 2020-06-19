import Component from "../Components/Component.js";
import Text from "../Components/Text.js";
import Box from "../Components/Box.js";
import { TextButton } from "../Components/Button.js";

class Category extends Component {
    constructor(x, y, name) {
        super(x, y);

        this.categoryTitle = new Text(x, y, name, 16);

        this.categoryScoreBox = new Box(x + 100, y - 10, 30, 30);
        this.categoryScoreText = new Text(0, 0, "0", 14, null, true);
        this.categoryScoreText.centerTo(this.categoryScoreBox);

        this.selectButton = new TextButton(x + 150, y - 10, 60, 30, "Select");
    }

    update(mouseHandler, rollsLeft, score) {
        this.categoryScoreText.text = score || "";
        if (rollsLeft === 3 || score !== null) {
            this.selectButton.isVisable = false;
        } else {
            this.selectButton.isVisable = true;
        }
        this.selectButton.update(mouseHandler);
    }

    render(renderer) {
        this.categoryTitle.render(renderer);
        this.categoryScoreBox.render(renderer);
        this.categoryScoreText.render(renderer);
        this.selectButton.render(renderer);
    }
}

export default Category;
