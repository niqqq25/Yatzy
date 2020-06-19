import Component from "./Component.js";
import Box from "./Box.js";
import Text from "./Text.js";

class Button extends Component {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.isVisable = true;
    }

    click() {
        console.log("clicked");
    }

    contains(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    update(mouseHandler) {
        if (this.isVisable && mouseHandler.isClicked && mouseHandler.pressed(this)) {
            this.click();
        }
    }
}

class TextButton extends Button {
    constructor(x, y, width, height, text) {
        super(x, y, width, height);
        this.buttonBox = new Box(x, y, width, height);
        this.buttonText = new Text(x, y, text, null, null, true);
        this.buttonText.centerTo(this.buttonBox);
    }

    render(renderer) {
        if (this.isVisable) {
            this.buttonBox.render(renderer);
            this.buttonText.render(renderer);
        }
    }
}

class ImageButton extends Button {
    constructor(x, y, width, height, image) {
        super(x, y, width, height);
        this.image = image;
        image.reshape(this);
    }

    render(renderer) {
        if (this.isVisable) {
            this.image.render(renderer);
        }
    }
}

export { Button, TextButton, ImageButton };
