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

  generateFeedback(guessCombination: Combination, targetCombination: Combination): void {
    let rightPosition: Array<number> = [];
    console.log(guessCombination)
    for(let i = 0; i < guessCombination.colors.length; i++) {
      console.log(guessCombination.colors[i].color.classList[0])
      console.log(targetCombination.colors[i].color.classList[0])
      if (guessCombination.colors[i].color.classList[0] == targetCombination.colors[i].color.classList[0]) {
        rightPosition.push(i);
      }
    }
    console.log(rightPosition);
    const newFeedbackContainer = document.createElement("div");
    newFeedbackContainer.classList.add("feedback-container");
    for(let i = 0; i < rightPosition.length; i++) {
      const newFeedbackRightCircle = document.createElement("div");
      newFeedbackRightCircle.classList.add("rojo", "feedback-cirlce");
      newFeedbackContainer.insertAdjacentElement("afterbegin", newFeedbackRightCircle)
    }
    const historicContainer = document.getElementsByClassName("historic-container")[0];
    historicContainer.insertAdjacentElement("beforeend", newFeedbackContainer);
  }
}