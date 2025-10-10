import { IPrintable } from "./IPrintable.js";

export class Combination implements IPrintable {
  #colors: Array<string>;

  constructor() {
    this.#colors = [];
  }

  get colors(): Array<string> {
    return this.#colors;
  }

  set colors(color: string) {
    this.#colors.push(color);
  }

 

  render(printableElement: HTMLElement, targetNode: HTMLElement, position: InsertPosition): void {
    this.#colors.forEach((element) => {
      const newColorSquare = document.createElement("div");
       newColorSquare.classList.add(element, "color-square");
       printableElement.appendChild(newColorSquare);
    });
    targetNode.insertAdjacentElement(position, printableElement);
  }
}