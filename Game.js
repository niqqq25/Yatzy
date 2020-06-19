import GameState from "./GameState.js";
import Renderer from "./Renderer.js";
import MouseHandler from "./MouseHandler.js";

//scenes
import GameScene from "./GameScene.js";

const images = [{ id: "dice", src: "/sprites/dice.png" }];

class Game {
    constructor(width, height) {
        this.loadingImagesCount = 0;
        this.gameState = new GameState();
        this.canvas = this.getCanvas(width, height);
        this.renderer = new Renderer(this.gameState, this.canvas);
        this.mouseHandler = new MouseHandler(this.canvas);
    }

    run() {
        this.loadImages();
        requestAnimationFrame(this.loadingLoop.bind(this));
    }

    initScenes() {
        this.gameScene = new GameScene(this.gameState);
    }

    getCanvas(width, height) {
        const canvas = document.createElement("canvas");
        canvas.id = "game";
        canvas.width = width;
        canvas.height = height;
        document.getElementById("root").append(canvas);
        return canvas;
    }

    loadingLoop() {
        this.renderer.clear();
        if (this.loadingImagesCount) {
            requestAnimationFrame(this.loadingLoop.bind(this));
        } else {
            this.initScenes();
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    gameLoop() {
        this.renderer.clear();

        this.gameScene.update(this.mouseHandler);
        this.gameScene.render(this.renderer);

        this.mouseHandler.reset();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    loadImages() {
        images.forEach(({ id, src }) => {
            this.loadingImagesCount++;
            const image = new Image();
            image.onload = () => {
                this.loadingImagesCount--;
            };
            image.src = src;
            this.gameState.images[id] = image;
        });
    }
}

export default Game;
