import { CONST } from "./const/const";

export class MainMenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: "MainMenuScene"
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );

    if (CONST.SCORE > CONST.HIGHSCORE) {
      CONST.HIGHSCORE = CONST.SCORE;
    }
    CONST.SCORE = 0;
  }

  preload(): void {
    this.load.image('sky', 'dist/assets/sky.png');

    this.load.bitmapFont(
      "snakeFont",
      "dist/assets/font/snakeFont.png",
      "dist/assets/font/snakeFont.fnt"
    );
  }

  create(): void {
    this.add.image(400, 300, 'sky');

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 3 + 30,
        this.sys.canvas.height / 2 - 10,
        "snakeFont",
        "S: PLAY",
        20
      )
    );

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 180,
        this.sys.canvas.height / 2 - 90,
        "snakeFont",
        "John Star",
        32
      )
    );

    this.bitmapTexts.push(
      this.add.bitmapText(
        this.sys.canvas.width / 2 - 130,
        this.sys.canvas.height / 2 + 100,
        "snakeFont",
        "HIGHSCORE: " + CONST.HIGHSCORE,
        16
      )
    );
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start("GameScene");
    }
  }
}