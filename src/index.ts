// const redSquare: HTMLElement = document.getElementById("red-square");

// redSquare.addEventListener("click", (e) => {
//   if(e.target instanceof HTMLElement){
//       if(e.target.classList.contains("red")){
//         e.target.classList.replace("red", "green");
//       } else if (e.target.classList.contains("green")) {
//            e.target.classList.replace("green", "red");
//         }
//   }
  
// })

// console.log(redSquare);


const colorButtons = document.querySelectorAll(".color-square");
const sendCombinationButton = document.getElementById(
  "send-combination-button"
);
let currentSquareCombination: NodeListOf<Element>;
colorButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    // crear nuevo elemento
    currentSquareCombination = document.querySelectorAll(".current-square");
    if(currentSquareCombination.length < 4) {
       const newCurrentCombinationButton: HTMLElement =
         document.createElement("div");
       newCurrentCombinationButton.classList.add("current-square");
       //añadir clases del elemento clikado
       console.log(currentSquareCombination.length);
       if (e.target instanceof HTMLElement) {
         e.target.classList.forEach((element) => {
           newCurrentCombinationButton.classList.add(element);
         });
       }
       //añadir a la seccion current combination
       sendCombinationButton.insertAdjacentElement(
         "beforebegin",
         newCurrentCombinationButton
       );
    }
   
  })

  })

  
console.log(colorButtons);