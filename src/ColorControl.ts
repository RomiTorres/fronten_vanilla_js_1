import { Combination } from "./Combination.js";
import { Game } from "./Game.js";
import { IPrintable } from "./IPrintable.js";

export class ColorControl {
  #color: HTMLElement;

  constructor(color: string, currentCombination: Combination, game: Game) {
    const colorButton: HTMLElement = document.createElement("div");
    colorButton.classList.add(color, "color-square");
    this.#color = colorButton;
    const targetNode = document.getElementById("square-button");
    const position: InsertPosition = "beforeend";
    targetNode.insertAdjacentElement(position, colorButton);
  }

  get color(): HTMLElement {
    return this.#color;
  }

  // colorButton.addEventListener("click", () => {
  //       if (currentCombination.colors.length < game.combinationSize) {
  //         currentCombination.colors.push(color);
  //         const currenCombinationNode = document.getElementById(
  //           "current-combination"
  //         );
  //         currenCombinationNode.innerHTML = "";
  //         const currentCombinationContainer = document.createElement("div");
  //         currentCombinationContainer.classList.add("color-combination");
  //         currentCombination.render(
  //           currentCombinationContainer,
  //           currenCombinationNode,
  //           "afterbegin"
  //         );
  //       }
  //     });
}