export class Game {
  #maxAttemps: number;
  #combinationSize: number;
  #availableColor: Array<string>;
  #targetCombination: Array<string> = [];

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

  get targetCombination(): Array<string> {
    return this.#targetCombination;
  }

  get availableColor(): Array<string> {
    return this.#availableColor ;
  }

  generateTargetCombination(
    combinationSize: number,
    availableColor: Array<string>
  ): Array<string> {
    let targetCombination: Array<string> = [];
    for(let i = 1; i <= combinationSize; i++) {
      
      targetCombination.push(
        availableColor[Math.floor(Math.random() * availableColor.length)]
      );
    }
    return targetCombination;
  }
}