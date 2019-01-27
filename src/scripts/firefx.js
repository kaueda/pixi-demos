import * as PIXI from 'pixi.js';

let fireFXContainer = new PIXI.Container();

export function setup(game) {
    if (fireFXContainer.children.length === 0) {
        game.stage.addChild(fireFXContainer);

        const todoTxt = new PIXI.Text('TO DO FireFX', {
            fontSize: 36,
            fontFamily: 'Arial',
            fill: '#ffffff',
        });
        todoTxt.position.set(game.screen.width/2, game.screen.height/2);
        todoTxt.anchor.set(0.5);

        fireFXContainer.addChild(todoTxt);
        fireFXContainer.visible = false;
    }
}

export function start() {
    fireFXContainer.visible = true;
}

export function stop() {
    fireFXContainer.visible = false;
}