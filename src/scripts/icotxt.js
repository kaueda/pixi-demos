import * as PIXI from 'pixi.js';

let icotxtContainer = new PIXI.Container();

export function setup(game) {
    if (icotxtContainer.children.length === 0) {
        game.stage.addChild(icotxtContainer);

        const todoTxt = new PIXI.Text('TO DO Icon+Text', {
            fontSize: 36,
            fontFamily: 'Arial',
            fill: '#ffffff',
            background: "#ccffcc",
        });
        todoTxt.position.set(game.screen.width/2, game.screen.height/2);
        todoTxt.anchor.set(0.5);

        console.log(todoTxt.position);

        icotxtContainer.addChild(todoTxt);
        icotxtContainer.visible = false;
    }
}

export function start() {
    // console.log(todoTxt.position);
    icotxtContainer.visible = true;
}

export function stop() {
    icotxtContainer.visible = false;
}