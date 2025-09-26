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

colorButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    // crear nuevo elemento

    const newCurrentCombinationButton: HTMLElement = document.createElement("div");

    //añadir clases del elemento clikado
    if (e.target instanceof HTMLElement) {
      e.target.classList.forEach((element) => {
        newCurrentCombinationButton.classList.add(element)
      })
    }
    //añadir a la seccion current combination
    sendCombinationButton.insertAdjacentElement("beforebegin", newCurrentCombinationButton);
  })
})

console.log(colorButtons);