export class Combination {
  #colors: Array<String>;

  constructor() {
    this.#colors = [];
  }

  get colors():Array<String> {
    return this.#colors
  }

  set colors(color:string) {
    this.#colors.push(color)
  }
  

}