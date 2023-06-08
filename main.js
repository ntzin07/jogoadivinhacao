// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
buttonTry.addEventListener('click', handleTryClick)
buttonAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }

    if(Number('1') == xAttempts) {
      screen2.querySelector("h2").innerText = `Parabéns! Você acertou em ${xAttempts} tentativa.`
      
  }

  else {
    screen2.querySelector("h2").innerText = `Você é horrível. Acertou em ${xAttempts} tentativas.`
  }
   
  

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}