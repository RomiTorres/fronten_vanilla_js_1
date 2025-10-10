import { Combination } from "./Combination.js";
import { Game } from "./Game.js";
import { IPrintable } from "./IPrintable.js";

export class ColorControl implements IPrintable {
  #color: string;

  constructor(color: string, currentCombination: Combination, game: Game) {
    this.#color = color;
    const targetNode = document.getElementById("square-button");
    const position: InsertPosition = "beforeend";
    const colorButton: HTMLElement = document.createElement("div");
    this.render(colorButton, targetNode, position);
    colorButton.addEventListener("click", () => {
     if(currentCombination.colors.length < game.combinationSize) {
      currentCombination.colors.push(color);
     const currenCombinationNode =  document.getElementById("current-combination");
     currenCombinationNode.innerHTML = "";
     const currentCombinationContainer = document.createElement("div");
     currentCombinationContainer.classList.add("color-combination");
      currentCombination.render(currentCombinationContainer, currenCombinationNode, "afterbegin");
     }
    })
  }

  get color(): string {
    return this.#color;
  }

  render(printableElement: HTMLElement, targetNode: HTMLElement, position: InsertPosition): void {
    printableElement.classList.add(this.#color, "color-square");
    targetNode.insertAdjacentElement(position, printableElement);
  }

}