const TWEEN = require('@tweenjs/tween.js');

import * as PIXI from 'pixi.js';
import * as Cards from './cards';
import * as IcoTxt from './icotxt';
import * as FireFX from './firefx';
import { Button } from './button';

const game = new PIXI.Application({
	autoResize: true,
    resolution: devicePixelRatio 
});
document.body.appendChild(game.view);
let stdScreen = { width: 960, height: 640 };
game.renderer.resize(stdScreen.width, stdScreen.height);

let labelStyle = {
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#ffffff',
    stroke: '#F719FF',
    strokeThickness: 2,
}

let btnCardPos = {x: stdScreen.width/2 - 220, y: stdScreen.height/2 + 280};
const buttonCards = new Button(btnCardPos.x, btnCardPos.y, 110, 50, {color: 0x46B200, alpha: 1});
buttonCards.setAnchor(0.5);
const buttonCardsLabel = new PIXI.Text('Card Demo', labelStyle);
buttonCardsLabel.position.set(btnCardPos.x, btnCardPos.y);
buttonCardsLabel.anchor.set(0.5);
buttonCards.onPointerDown(() => {
    IcoTxt.stop();
    FireFX.stop();
    Cards.animate();

    buttonCards.scale.set(.95);
    buttonCardsLabel.scale.set(.95);
});
buttonCards.onPointerUp(() => {
    buttonCards.scale.set(1);
    buttonCardsLabel.scale.set(1);
});

let btnIcoTxtPos = {x: stdScreen.width/2, y: stdScreen.height/2 + 280}
const buttonIcoTxt = new Button(btnIcoTxtPos.x, btnIcoTxtPos.y, 200, 50, {color: 0x46B200, alpha: 1});
buttonIcoTxt.setAnchor(0.5);
const buttonIcoTxtLabel = new PIXI.Text('Icon+Image Demo', labelStyle);
buttonIcoTxtLabel.position.set(btnIcoTxtPos.x, btnIcoTxtPos.y);
buttonIcoTxtLabel.anchor.set(0.5);
buttonIcoTxt.onPointerDown(() => {
    FireFX.stop();
    Cards.stop();
    IcoTxt.start();

    buttonIcoTxt.scale.set(.95);
    buttonIcoTxtLabel.scale.set(.95);
});
buttonIcoTxt.onPointerUp(() => {
    buttonIcoTxt.scale.set(1);
    buttonIcoTxtLabel.scale.set(1);
});

let btnFireFXPos = {x: stdScreen.width/2 + 220, y: stdScreen.height/2 + 280}
const buttonFireFX = new Button(btnFireFXPos.x, btnFireFXPos.y, 160, 50, {color: 0x46B200, alpha: 1});
buttonFireFX.setAnchor(0.5);
const buttonFireFXLabel = new PIXI.Text('Fire FX Demo', labelStyle);
buttonFireFXLabel.position.set(btnFireFXPos.x, btnFireFXPos.y);
buttonFireFXLabel.anchor.set(0.5);
buttonFireFX.onPointerDown(() => {
    IcoTxt.stop();
    Cards.stop();
    FireFX.start();

    buttonFireFX.scale.set(.95);
    buttonFireFXLabel.scale.set(.95);
});
buttonFireFX.onPointerUp(() => {
    buttonFireFX.scale.set(1);
    buttonFireFXLabel.scale.set(1);
});

// const buttonBack = new Button(stdScreen.width/2, stdScreen.height/2, 300, 100, {color: 0x00ff00, alpha: 1});

const fpsText = new PIXI.Text('fps text in pixi', {
    fontSize: 15,
    fontFamily: 'Arial',
    fill: '#46B200',
});
fpsText.position.set(10, 5)
game.stage.addChild(fpsText);

let start = 0;
animate();
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);

    // console.log(`FPS: ${Math.round(1000 / (time - start))}`);
    fpsText.text = `FPS: ${Math.round(1000 / (time - start))}`;
    start = time;
}

Cards.setup(game);
IcoTxt.setup(game);
FireFX.setup(game);

game.stage.addChild(buttonCards);
game.stage.addChild(buttonCardsLabel);
game.stage.addChild(buttonIcoTxt);
game.stage.addChild(buttonIcoTxtLabel);
game.stage.addChild(buttonFireFX);
game.stage.addChild(buttonFireFXLabel);

const gameContainer = new PIXI.Container();

// Listen for window resize events
window.addEventListener('resize', () => {
    // Resize the renderer
    game.renderer.resize(window.innerWidth, window.innerHeight);
    
    // You can use the 'screen' property as the renderer visible
    // area, this is more useful than view.width/height because
    // it handles resolution
    // rect.position.set(game.screen.width, game.screen.height);
    if (game.screen.width > stdScreen.width) {
        game.stage.scale.x = 1;
    } else {
        game.stage.scale.x = game.screen.width/stdScreen.width;
    }

    if (game.screen.height > stdScreen.height) {
        game.stage.scale.y = 1;
    } else {
        game.stage.scale.y = game.screen.height/stdScreen.height;
    }
});
