import { Scene, GameObjects } from "phaser";
import MobileTextInput from "../../components/MobileTextInput";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;
  private seedInput!: MobileTextInput;
  private seedConfirm: Phaser.GameObjects.Graphics;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.seedConfirm = this.add.graphics();

    this.title = this.add
      .text(300, 150, "WORD WARFARE", {
        fontFamily: "times new roman",
        fontSize: "48px",
        color: "#000000",
        // align: "center",
      })
      .setOrigin(0.5, 0.5);

    this.add
      .text(180, 210, "Game seed:", {
        fontFamily: "times new roman",
        fontSize: "24px",
        color: "#000000",
      })
      .setOrigin(0.5, 0.5);

    this.seedInput = new MobileTextInput(this, 380, 200);

    this.seedConfirm
      .fillRoundedRect(200, 200, 50, 50, 8)
      .fillStyle(0xdddddd, 1);
    this.seedConfirm
      .fillRoundedRect(200, 200, 50, 50, 8)
      .fillStyle(0xdddddd, 1);
    this.seedConfirm.setInteractive();

    // Mouse enter
    this.seedConfirm.on(Phaser.Input.Events.POINTER_OVER, () => {
      this.input.setDefaultCursor("pointer");
    });
    // Mouse leave
    this.seedConfirm.on(Phaser.Input.Events.POINTER_OUT, () => {
      console.log("Mouse leave");
      this.input.setDefaultCursor("default");
    });

    // this.input.once("pointerdown", () => {
    //   this.scene.start("Game");
    // });

    this.data.set({ foo: "ludo" });
  }
}
