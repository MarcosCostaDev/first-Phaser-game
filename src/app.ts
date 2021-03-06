import 'phaser';

import { GameScene } from "./gameScene";
import { BootScene } from './bootScene';
import { MainMenuScene } from './mainMenuScene';

export let Game: Game2048;

var config: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, MainMenuScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
};

export class Game2048 extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  Game = new Game2048(config);
};