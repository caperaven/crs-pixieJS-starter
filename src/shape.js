export function createCircle(x, y) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xffbb00);
    graphics.drawCircle(x, y, 100);
    graphics.endFill();
    return graphics;
}