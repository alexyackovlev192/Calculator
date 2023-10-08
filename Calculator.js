function addToInput(number) {
    var inputElement = document.getElementById("inpt");
    var currentValue = inputElement.value;
    inputElement.value = currentValue + number;
}

function operation(operator) {
    const a = 10, b = 5;
    const formula = a + operator + b;
    console.log(eval(formula));
}

function clearInputCE() {

}

function clearInputC() {
    var inputElement = document.getElementById("inpt");
    inputElement.value = "";
}

function delInput() {
    var inputElement = document.getElementById("inpt");
    var currentValue = inputElement.value;
    var newString = currentValue.substring(0, currentValue.length - 1);
    inputElement.value = newString;
}

function reverce() {
    
}

function calculateResult() {
    
}