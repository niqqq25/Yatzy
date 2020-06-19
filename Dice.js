import { ImageButton } from "./Components/Button.js";
import Box from "./Components/Box.js";
import Sprite from "./Components/Sprite.js";

class Dice extends ImageButton {
    constructor(x, y, width, height, image) {
        super(x, y, width, height, new Sprite(image, 6, 0));
        this.value = null;
        this.isLocked = false;
        this.border = new Box(x, y, width, height);
    }

    render(renderer) {
        if (this.value) {
            this.image.render(renderer);
        }
        if (this.isLocked) {
            this.border.render(renderer);
        }
    }

    update(mouseHandler) {
        if (this.value) {
            this.image.index = this.value - 1;
        }
        super.update(mouseHandler);
    }

    click() {
        this.isLocked = !this.isLocked;
    }

    reset() {
        this.isLocked = false;
        this.value = null;
        this.image.index = -1;
    }

    roll() {
        if (this.isLocked) {
            return;
        }
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}

export default Dice;
