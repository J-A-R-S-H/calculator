let currentNum = ""
let previousNum = ""
let operator = ""

const clear = document.querySelector(".clear")
clear.addEventListener("click", clearCalculator)
const equal = document.querySelector(".equal")
equal.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        operate()
    }
})
const currentDisplayNum = document.querySelector(".currentNumber")
const previousDisplayNum = document.querySelector(".previousNumber")

const allNumberBtns = document.querySelectorAll(".number")


const allOperatorBtns = document.querySelectorAll(".operator")



allNumberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNum(e.target.textContent)
    })
})

allOperatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent)
    })
})


function handleNum(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = ""
        currentDisplayNum.textContent = currentNum
    }
    if (currentNum.length <= 11) {
        currentNum += number
        currentDisplayNum.textContent = currentNum
    }

}

function handleOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op)
    }
    else if (currentNum === "") {
        operatorCheck(op)
    }
    else {
        operate()
        operator = op
        currentDisplayNum.textContent = "0"
        previousDisplayNum.textContent = previousNum + "" + operator
    }
}


function operatorCheck(text) {
    operator = text
    currentDisplayNum.textContent = "0"
    currentNum = ""
    previousDisplayNum.textContent = previousNum + "" + operator
}


function add() {
    previousNum += currentNum
}
function subtract() {
    previousNum = previousNum -= currentNum
}
function divide() {
    previousNum = previousNum /= currentNum
}
function multiply() {
    previousNum = previousNum *= currentNum
}

function operate() {
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)

    if (operator === "+") {
        add()
    }
    else if (operator === "-") {
        subtract()
    }
    else if (operator === "*") {
        multiply()
    }
    else if (operator === "/") {

        if (currentNum <= 0) {
            previousNum = "Error"
            previousDisplayNum.textContent = "";
            displayResults()
            return
        }
        divide()
    }
    previousNum = roundNumber(previousNum)
    previousNum = previousNum.toString()
    displayResults()
    return
}

function displayResults() {
    operator = ""
    if (previousNum.length <= 11) {
        currentDisplayNum.textContent = previousNum
    }
    else {
        currentDisplayNum.textContent = previousNum.slice(0, 11) + ".."
    }
    previousDisplayNum.textContent = ""
    currentNum = ""
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000
}

function clearCalculator() {
    currentNum = ""
    previousNum = ""
    operator = ""
    currentDisplayNum.textContent = "0"
    previousDisplayNum.textContent = ""
}