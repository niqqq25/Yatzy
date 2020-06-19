import Image from "./Image.js";

class Sprite extends Image {
    constructor(image, cols, index, x, y, width, height) {
        super(image, x, y, width, height);
        this.cols = cols;
        this.index = index;
        this.size = image.width / cols;
    }

    render(renderer) {
        const sx = (this.index % this.cols) * this.size;
        const sy = Math.floor(this.index / this.cols) * this.size;
        renderer.renderImage(this.image, this.x, this.y, this.width, this.height, sx, sy, this.size, this.size);
    }
}

export default Sprite;
