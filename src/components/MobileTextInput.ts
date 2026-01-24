import Phaser from "phaser";

export default class MobileTextInput {
  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;
  private box: Phaser.GameObjects.Graphics;
  private text: Phaser.GameObjects.Text;

  private input: HTMLInputElement;

  private padding = 10;
  private radius = 8;
  private width: number;

  private isFocused = false;

  constructor(scene: Phaser.Scene, x: number, y: number, width = 240) {
    this.scene = scene;
    this.width = width;

    this.box = scene.add.graphics();
    this.text = scene.add.text(this.padding, this.padding, "", {
      fontFamily: "times new roman",
      fontSize: "24px",
      color: "#000000",
    });

    this.container = scene.add.container(x, y, [this.box, this.text]);

    this.drawBox();

    // Create hidden HTML input
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.autocapitalize = "off";
    this.input.autocomplete = "off";
    this.input.spellcheck = false;

    Object.assign(this.input.style, {
      position: "absolute",
      opacity: "1",
      pointerEvents: "none",
      height: "1px",
      width: "1px",
    });

    document.body.appendChild(this.input);

    // Sync input → Phaser text
    this.input.addEventListener("input", () => {
      this.text.setText(this.input.value);
      this.drawBox();
    });

    // Focus on tap
    this.container.setSize(this.width, this.text.height + this.padding * 2);
    this.container.setInteractive();

    this.container.on("pointerdown", () => {
      this.focus();
    });
  }

  private drawBox(): void {
    this.box.clear();

    if (this.isFocused) {
      this.box.fillStyle(0xcccccc, 1);
    } else {
      this.box.fillStyle(0xffffff, 1);
    }

    this.box.lineStyle(2, 0x000000);

    const height = this.text.height + this.padding * 2;

    this.box.fillRoundedRect(0.5, 0.5, this.width, height, this.radius);
    this.box.strokeRoundedRect(0, 0, this.width, height, this.radius);

    this.container.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, this.width, height),
      Phaser.Geom.Rectangle.Contains,
    );
  }

  focus(): void {
    if (this.isFocused) return;

    this.isFocused = true;
    this.drawBox();
    this.input.focus();
  }

  blur(): void {
    if (!this.isFocused) return;

    this.isFocused = false;
    this.drawBox();
    this.input.blur();
  }

  getText(): string {
    return this.input.value;
  }

  setText(value: string): void {
    this.input.value = value;
    this.text.setText(value);
    this.drawBox();
  }

  destroy(): void {
    this.container.destroy();
    this.input.remove();
  }
}
