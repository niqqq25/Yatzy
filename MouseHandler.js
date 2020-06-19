class MouseHandler {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = null;
        this.y = null;
        this.isClicked = false;
        canvas.onclick = this.handleMouseClick.bind(this);
    }

    handleMouseClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.x = event.clientX - rect.left;
        this.y = event.clientY - rect.top;
        this.isClicked = true;
    }

    reset() {
        this.isClicked = false;
    }

    pressed(component) {
        return this.isClicked && component.contains(this.x, this.y);
    }
}

export default MouseHandler;
