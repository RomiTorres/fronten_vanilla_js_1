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

 

  render(printableElement: HTMLElement, targetNode: HTMLElement, position: InsertPosition):void {
    this.#colors.forEach((element, index) => {
      const newColorSquare = document.createElement("div");
       newColorSquare.classList.add(element, "color-square");
       printableElement.appendChild(newColorSquare);
       newColorSquare.addEventListener("click", (e) => {
        if(e.target instanceof HTMLElement) {
          this.#colors.splice(index, 1);
          e.target.remove();
          
        }
       })
    });
    targetNode.insertAdjacentElement(position, printableElement);
  }
}