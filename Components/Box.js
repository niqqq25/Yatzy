import Component from "./Component.js";

class Box extends Component {
    constructor(x, y, width, height, color) {
        super(x, y, width, height);
        this.color = color || "#000000";
    }

    render(renderer) {
        renderer.renderBox(this.x, this.y, this.width, this.height, this.color);
    }
}

export default Box;
