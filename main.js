const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
event.preventDefault()

const inputNumber = document.querySelector("#inputNumber")



if(Number(inputNumber.value) == randomNumber) {
  classList.add("hide")
  classList.remove("hide")
  
}
  
inputNumber.value = ""

xAttempts++

console.log (xAttempts)}

/*Eventos */

const buttonTry = document.querySelector("#buttonTry")
const buttonAgain = document.querySelector("#buttonAgain")

buttonTry.addEventListener('click', handleTryClick)
buttonAgain.addEventListener('click', function() {
  classList.remove("hide")
  classList.add("hide")

})


