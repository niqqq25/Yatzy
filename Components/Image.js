import Component from "./Component.js";

class Image extends Component {
    constructor(image, x, y, width, height) {
        super(x, y, width, height);
        this.image = image;
    }

    reshape(component) {
        this.x = component.x;
        this.y = component.y;
        this.width = component.width;
        this.height = component.height;
    }

    render(renderer) {
        renderer.renderImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export default Image;
