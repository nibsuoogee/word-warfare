import { Boot } from "./scenes/Boot";
import { GameOver } from "./scenes/GameOver";
import { Game as MainGame } from "./scenes/Game";
import { MainMenu } from "./scenes/MainMenu";
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 600,
  height: 800,
  parent: "game-container",
  backgroundColor: "#f8f8f8",
  scene: [Boot, Preloader, MainMenu, MainGame, GameOver],
  pixelArt: true,
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
