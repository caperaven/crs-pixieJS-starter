import {createCircle} from "./src/shape.js";

class Application {
    constructor() {
        this.pixieApp = new PIXI.Application(
            {
                backgroundColor: 0x1099bb,
                width: innerWidth,
                height: innerHeight,
                resolution: devicePixelRatio,
                autoDensity: true,
                antialias: true
            });

        document.body.appendChild(this.pixieApp.view);

        this._addShape();
    }

    _addShape() {
        const x = this.pixieApp.screen.width / 2;
        const y = this.pixieApp.screen.height / 2;
        this.pixieApp.stage.addChild(createCircle(x, y));
    }
}

globalThis.application = new Application();