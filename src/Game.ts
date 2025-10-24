import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { CurrentCombinationControl } from "./CurrentCombinationControl.js";

export class Game {
  #maxAttemps: number;
  #combinationSize: number;
  #availableColor: Array<string>;
  #targetCombination: Combination;
  #currentAttempt: number;

  constructor(
    maxAttemps: number,
    combinationSize: number,
    availableColor: Array<string>
  ) {
    this.#maxAttemps = maxAttemps;
    this.#combinationSize = combinationSize;
    this.#availableColor = availableColor;
    this.#targetCombination = this.generateTargetCombination(combinationSize, availableColor);
    this.#currentAttempt = 0;
    
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

  get currentAttempt(): number {
    return this.#currentAttempt;
  }


  incrementCurrentAttempt(): void {
    this.#currentAttempt++;
  }

  generateTargetCombination(combinationSize: number, availableColor: Array<string>): Combination {
    const targetCombination = new Combination();
    for (let i = 1; i <= combinationSize; i++) {
      const newColorControl = new ColorControl(availableColor[Math.floor(Math.random() * availableColor.length)], "color-square");
      targetCombination.colors = newColorControl;
    }
    console.log(targetCombination.colors);
    return targetCombination;
  }

  changeButtonState(currentCombination: Combination) {
    const button = document.getElementById("send-combination-button");
    if (currentCombination.colors.length == this.#combinationSize) {
      // habilitar botón
      button.removeAttribute("disabled");
    } else {
      // deshabilitar
      button.setAttribute("disabled", "true");
    }
  }

  checkCombinationAreEqual(comb1: Combination, comb2: Combination): boolean {
    let areCombinationEqual = true;
    for(let  i= 0; i < this.combinationSize; i++) {
      if(comb1.colors[i].color.classList[0] != comb2.colors[i].color.classList[0]) {
        areCombinationEqual = false;
        break;
      }
    }
    
    return areCombinationEqual;
  }

  checkWin(currentCombination: Combination): boolean {
    const areCombinationEqual = this.checkCombinationAreEqual(currentCombination, this.targetCombination)
    let isPlayerWinner = false;
    if (areCombinationEqual) isPlayerWinner = true;
    return isPlayerWinner;
  }
}