import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { CurrentCombinationControl } from "./CurrentCombinationControl.js";

export class Game {
  #maxAttemps: number;
  #combinationSize: number;
  #availableColor: Array<string>;
  #targetCombination: Combination;

  constructor(
    maxAttemps: number,
    combinationSize: number,
    availableColor: Array<string>
  ) {
    this.#maxAttemps = maxAttemps;
    this.#combinationSize = combinationSize;
    this.#availableColor = availableColor;
    this.#targetCombination = this.generateTargetCombination(
      combinationSize,
      availableColor
    );
  }

  get maxAttemps(): number {
    return this.#maxAttemps;
  }

  get combinationSize(): number {
    return this.#combinationSize;
  }

  get targetCombination(): Combination {
    return this.#targetCombination;
  }

  get availableColor(): Array<string> {
    return this.#availableColor;
  }

  generateTargetCombination(
    combinationSize: number,
    availableColor: Array<string>
  ): Combination {
    const targetCombination = new Combination();
    for (let i = 1; i <= combinationSize; i++) {
      const newColorControl = new ColorControl(
        availableColor[Math.floor(Math.random() * availableColor.length)]
      );
      targetCombination.colors = newColorControl;
    }
    return targetCombination;
  }

  changeButtonState(currentCombination: Combination) {
    const button = document.getElementById("send-combination-button");
    if(currentCombination.colors.length == this.#combinationSize) {
      // habilitar botón
      button.removeAttribute("disabled");
    } else {
      // deshabilitar
      button.setAttribute("disabled", "true");
    }
  }

  checkWin(currentCombination: Combination): boolean {
    let isPlayerWinner = false;
    if(currentCombination.colors == this.#targetCombination.colors) isPlayerWinner = true;
    return isPlayerWinner;
  }
  
}