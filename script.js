const calculator = document.querySelector("#calculator");
const calculatorDisplay = calculator.querySelector("input");
const calculatorKeys = calculator.querySelectorAll("button[data-value]");
let displayValue = "0";

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