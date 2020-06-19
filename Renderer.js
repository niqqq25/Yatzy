class Renderer {
    constructor(gameState, canvas) {
        this.gameState = gameState;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    renderText(x, y, text, size, color, isCentered = false) {
        this.context.font = `${size}px sans-serif`;
        this.context.fillStyle = color;
        if (isCentered) {
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
        } else {
            this.context.textAlign = "left";
            this.context.textBaseline = "top";
        }
        this.context.fillText(text, x, y);
    }

    renderBox(x, y, width, height, color) {
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    }

    renderImage(img, x, y, width, height, sx, sy, sWidth, sHeight) {
        if (sWidth) {
            this.context.drawImage(img, sx, sy, sWidth, sHeight, x, y, width, height);
        } else {
            this.context.drawImage(img, x, y, width, height);
        }
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Renderer;
