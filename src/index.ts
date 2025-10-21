import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { CombinationGeneratorControl } from "./CombinationGeneratorControl.js";
import { Game } from "./Game.js";

// const maxAttemps = parseInt(prompt("¿Cuántos intentos quieres tener?"));
// const combinationSize = parseInt(prompt("¿Qué tamaño de combinación quieres para el juego?"));


const currentGame = new Game(10, 4, ["rojo", "amarillo", "azul", "rosa", "verde", "morado"]);
const currentCombination = new Combination();
currentGame.availableColor.forEach((element) => {
  const colorButton = new CombinationGeneratorControl(element, currentCombination, currentGame);
})
console.log(currentGame);