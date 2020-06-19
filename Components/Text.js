import Component from "./Component.js";

class Text extends Component {
    constructor(x, y, text, size, color, center) {
        super(x, y);
        this.text = text;
        this.color = color || "#000000";
        this.size = size || 10;
        this.center = center || false;
    }

    centerTo(component) {
        this.x = component.x + component.width / 2;
        this.y = component.y + component.height / 2;
    }

    render(renderer) {
        renderer.renderText(this.x, this.y, this.text, this.size, this.color, this.center);
    }
}

export default Text;
