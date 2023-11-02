let current_value = 0;
let input_number = 0;
let calculation = "";
let last_action = "";
const input_box = document.getElementById("input-box");


function calculate(event){
    event.preventDefault();
    let input = document.forms["calculator"]["input-box"].value;
    switch(calculation){
        case "+":
            current_value += input_number;
            const input_box = document.getElementById("input-box");
            input_box.value = current_value;
            break;
        default:
            break;
    }
    
}
document.getElementById("additionButton").addEventListener("click", function() {
    // Append "+" to the calculation string
    calculation = "+";
    if(current_value == 0){
        current_value = input_number;
    }

  
  });

  document.getElementById("1").addEventListener("click", function() {
    // Append "+" to the calculation string
        input_number = 1; 
        input_box.value += 1;

  });








const form = document.querySelector("form");
form.addEventListener("submit", calculate);

