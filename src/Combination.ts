import { ColorControl } from "./ColorControl.js";
import { IPrintable } from "./IPrintable.js";

export class Combination {
  #colors: Array<ColorControl>;

  constructor() {
    this.#colors = [];
  }

  get colors(): Array<ColorControl> {
    return this.#colors;
  }

  set colors(color: ColorControl) {
    this.#colors.push(color);
  }

 

  // render(printableElement: HTMLElement, targetNode: HTMLElement, position: InsertPosition):void {
  //   this.#colors.forEach((element, index) => {
  //     const newColorSquare = document.createElement("div");
  //      newColorSquare.classList.add(element, "color-square");
  //      printableElement.appendChild(newColorSquare);
  //      newColorSquare.addEventListener("click", (e) => {
  //       if(e.target instanceof HTMLElement) {
  //         this.#colors.splice(index, 1);
  //         e.target.remove();
          
  //       }
  //      })
  //   });
  //   targetNode.insertAdjacentElement(position, printableElement);
  // }
}