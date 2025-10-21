import { Combination } from "./Combination.js";
import { Game } from "./Game.js";
import { IPrintable } from "./IPrintable.js";

export class ColorControl {
  #color: HTMLElement;

  constructor(color: string) {
    const colorButton: HTMLElement = document.createElement("div");
    colorButton.classList.add(color, "color-square");
    this.#color = colorButton;
  }

  get color(): HTMLElement {
    return this.#color;
  }


}