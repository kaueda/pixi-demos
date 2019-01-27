const TWEEN = require('@tweenjs/tween.js');
import * as PIXI from 'pixi.js';

const MAX_CARDS = 144;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let cardsContainer = new PIXI.Container();

export function setup(game) {
    if (cardsContainer.children.length === 0) {
        PIXI.loader.add('../assets/cards.json').load(() => {
            game.stage.addChild(cardsContainer);
            
            let sheet = PIXI.loader.resources['../assets/cards.json'].spritesheet;
            let nTex = 54;
    
            let x = 10;
            let y = 30;
    
            for (let i = 0; i < MAX_CARDS; i++) {
                let icard = new PIXI.Sprite(sheet.textures[getRandomInt(nTex)]);
                icard.zz = x;
                icard.x = x;
                icard.y = y;
                x += 4;
    
                cardsContainer.addChild(icard);
            }

            cardsContainer.visible = false;
        });   
    }
}

export function animate() {
    TWEEN.removeAll();
    
    let x = 10;
    let y = 30;

    for (let i = 0; i < MAX_CARDS; i++) {
        let icard = cardsContainer.children[i];
        icard.zz = x;
        icard.x = x;
        icard.y = y;
        x += 4;
    }
    
    cardsContainer.visible = true;

    x = 10;
    y = 250;
    let j = 0;
    let delay = 1000;
    let duration = 2000;

    for (let i = MAX_CARDS-1; i >= 0; i--) {
        let anim = new TWEEN.Tween(cardsContainer.children[i])
            .to({x, y, zz: x}, duration)
            .delay(j*delay)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate(() => {
                cardsContainer.children.sort((childA, childB) => {
                    return childA.zz - childB.zz;
                });
            })
        .start();

        j++;
        x += 4;
    }
}

export function stop() {
    TWEEN.removeAll();
    cardsContainer.visible = false;
}