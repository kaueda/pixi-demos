import * as PIXI from 'pixi.js'; 

export class Button extends PIXI.Graphics {
    constructor(x, y, width, height, fillStyle, lineStyle = {width:0, color:0x000000, alpha: 0}, radius = 15) {
        super();

        let {color:fillColor, alpha:fillAlpha} = fillStyle;
        let {width:lineWidth, color:lineColor, alpha:lineAlpha} = lineStyle;

        this.bt_fillStyle = fillStyle;
        this.bt_lineStyle = lineStyle;
        this.bt_width = width;
        this.bt_height = height;
        this.bt_radius = radius;

        // draw a rounded rectangle
        this.lineStyle(lineWidth, lineColor, lineAlpha);
        this.beginFill(fillColor, fillAlpha);
        this.drawRoundedRect(0, 0, width, height, radius);
        this.endFill();

        this.position.set(x, y);

        this.buttonMode = true;
        this.interactive = true;
    }

    setAnchor(x, y = x) {
        let {color:fillColor, alpha:fillAlpha} = this.bt_fillStyle;
        let {width:lineWidth, color:lineColor, alpha:lineAlpha} = this.bt_lineStyle;

        this.clear();
        this.lineStyle(lineWidth, lineColor, lineAlpha);
        this.beginFill(fillColor, fillAlpha);
        this.drawRoundedRect(-this.bt_width*x, -this.bt_height*y, this.bt_width, this.bt_height, this.radius);
        this.endFill();
    }

    onPointerDown(cb) {
        this.on('pointerdown', cb);
    }
    
    onPointerUp(cb) {
        this.on('pointerup', cb);
        this.on('pointerupoutside', cb);
    }
    
    onPointerOver(cb) {
        this.on('pointerover', cb);
    }
    
    onPointerOut(cb) {
        this.on('pointerout', cb);
    }
}