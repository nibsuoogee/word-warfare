import { Scene, GameObjects } from "phaser";
import MobileTextInput from "../../components/MobileTextInput";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;
  private seedInput!: MobileTextInput;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.title = this.add
      .text(300, 300, "WORD WARFARE", {
        fontFamily: "times new roman",
        fontSize: "48px",
        color: "#000000",
        // align: "center",
      })
      .setOrigin(0.5, 0.5);

    this.add
      .text(180, 360, "Game seed:", {
        fontFamily: "times new roman",
        fontSize: "24px",
        color: "#000000",
      })
      .setOrigin(0.5, 0.5);

    this.seedInput = new MobileTextInput(this, 260, 340);

    // this.input.once("pointerdown", () => {
    //   this.scene.start("Game");
    // });

    this.data.set({ foo: "ludo" });
  }
}
