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

document.getElementById("send-combination-button").addEventListener("click", () => {
  const isPlayerWinner:boolean = currentGame.checkWin(currentCombination);
  if(isPlayerWinner) {
    window.location.href="winner.html";
  }
  if(!isPlayerWinner) {
    //currentGame.checkLoose();
    //currentGame.sendToHostoric();
    currentCombination.deleteColors();
    //currentGame.generateFeedback();
  }
})


/*
1. Habilitar botón de comprobar combinación cuando tenemos 4 colores elegidos (y deshabilitarlo en caso contrario)
2. Comprobar victoria.
3. Comprobar derrota.
4. Añadir combinación histórica.
5. Dar feedback de la combinación enviada.
*/