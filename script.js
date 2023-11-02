const calculator = document.querySelector("#calculator");
const calculatorDisplay = calculator.querySelector("input");
const calculatorKeys = calculator.querySelectorAll("button[data-value]");
const calculatorOperators = calculator.querySelectorAll("button[data-op]");
let displayValue = "0";

let firstOperand = 0;
let secondOperand = 0;
let operator = null;

function updateDisplay(newChar) {
  if(displayValue === "0") {
    displayValue = newChar;
    calculatorDisplay.value = displayValue;
    return;
  }
  displayValue += newChar;
    calculatorDisplay.value = displayValue;
}

calculatorDisplay.addEventListener('input', () => {
    displayValue = calculatorDisplay.value;
})

for (const button of calculatorKeys) {
    const buttonValue = button.getAttribute("data-value");
    button.addEventListener("click", () => {
        updateDisplay(buttonValue);
    })
}

for (const button of calculatorOperators) {
    const buttonValue = button.getAttribute("data-op");
    button.addEventListener("click", () => {
        console.log(buttonValue);
        if(buttonValue == "eq"){
            secondOperand = parseFloat(calculatorDisplay.value);
            if(operator === "+") {
                displayValue = firstOperand + secondOperand;
                calculatorDisplay.value = displayValue;
                return;
            }
        }
        if(buttonValue === "add") {
            operator = "+";
            firstOperand = parseFloat(calculatorDisplay.value);
            displayValue = "0";
            calculatorDisplay.value = displayValue;
            return;
        }
    })
}

