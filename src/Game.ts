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
      const newColorControl = new ColorControl(availableColor[Math.floor(Math.random() * availableColor.length)],"color-square");
      targetCombination.colors = newColorControl;
    }
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
    for (let i = 0; i < this.combinationSize; i++) {
      if (comb1.colors[i].color.classList[0] != comb2.colors[i].color.classList[0]) {
        areCombinationEqual = false;
        break;
      }
    }
    return areCombinationEqual;
  }

  checkWin(currentCombination: Combination): boolean {
    const areCombinationEqual = this.checkCombinationAreEqual(currentCombination, this.targetCombination);
    let isPlayerWinner = false;
    if (areCombinationEqual) isPlayerWinner = true;
    return isPlayerWinner;
  }

  manageRightColorPositions(guess: Array<string>, target: Array<string>): number {
    let numberOfRightPosition: number = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] == target[i]) {
        numberOfRightPosition++;
        guess.splice(i, 1);
        target.splice(i, 1);
        i--;
      }
    }
    return numberOfRightPosition;
  }

  renderFeedback(qty: number, color: string) {
    const newFeedbackContainer = document.createElement("div");
    newFeedbackContainer.classList.add("feedback-container");
    for (let i = 0; i < qty; i++) {
      const newFeedbackRightCircle = document.createElement("div");
      newFeedbackRightCircle.classList.add(color, "feedback-circle");
      newFeedbackContainer.insertAdjacentElement("afterbegin", newFeedbackRightCircle);
    }
    const historicContainer = document.getElementsByClassName("historic-container")[0];
    historicContainer.insertAdjacentElement("beforeend", newFeedbackContainer);
  }

  manageWrongPosition(guess: Array<string>, target: Array<string>): number {
    let qtyWrongPosition = 0;
    for(let i = 0; i< guess.length; i++) {
      for(let j = 0; j < target.length; j++) {
        if(guess[i] == target[j]) {
          qtyWrongPosition++;
          target.splice(j, 1);
        }
      }
    }
    return qtyWrongPosition;
  }

  generateFeedback(guessCombination: Combination, targetCombination: Combination): void {
    //generar vectores colores
    let guessColorCombination: Array<string> = guessCombination.createColorStringArrays();
    let targetColorCombination: Array<string> = targetCombination.createColorStringArrays();
    // devolver vectores modificados y numeros de posiciones correctas
    const qtyRightColorPosition = this.manageRightColorPositions(guessColorCombination, targetColorCombination);
    // pintar
    this.renderFeedback(qtyRightColorPosition, "rojo");
    const qtyWrongPosition = this.manageWrongPosition(guessColorCombination, targetColorCombination);
    this.renderFeedback(qtyWrongPosition, "negro");
  }
}
