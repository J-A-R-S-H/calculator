let currentNum = ""
let previousNum = ""
let operator = ""

const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")
const currentDisplayNum = document.querySelector(".currentNumber")
const previousDisplayNum = document.querySelector(".previousNumber")

const allNumberBtns = document.querySelectorAll(".number")


const allOperatorBtns = document.querySelectorAll(".operator")


function handleNum(number) {
    if (currentNum.length <= 11) {
        currentNum += number
        currentDisplayNum.textContent = currentNum
    }
}
function handleOperator() {

}

allNumberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNum(e.target.textContent)
    })
})


function add() {
    previousNum += currentNum
}
function subtract() {
    previousNum -= currentNum
}
function divide() {
    previousNum /= currentNum
}
function multiply() {
    previousNum *= currentNum
}

function operate() {
    if (operator === "+") {
        add()
    }
    if (operator === "-") {
        subtract()
    }
    if (operator === "*") {
        multiply()
    }
    if (operator === "/") {
        divide()
    }
}

function DisplayResults() {
    operator = ""
    if (currentDisplayNum.length < 11) {
        currentDisplayNum.textContent = previousNum.slice(0, 11) + ".."
    }
    else {
        currentDisplayNum.textContent = previousNum.slice
    }
    previousDisplayNum.textContent = ""
    currentDisplayNum.textContent = previousNum
    currentNum = ""
}

