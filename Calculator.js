var count=0, operat, k = true;

function operation(operator) {
    var inputElement = document.getElementById("inpt");
    var currentValue = inputElement.value;
    if (currentValue === "") {
        return; 
    }
    operat = operator;

    if (!k) {
        inputElement.value = currentValue.substring(0, currentValue.length - 1) + operator;
        return;
    } 
    inputElement.value = currentValue + operator;
    k = false;
}

function addToInput(number) {
    var inputElement = document.getElementById("inpt");
    inputElement.value += number;
    if (k) count++;
}

function clearInputCE() {
    var inputElement = document.getElementById("inpt");
    inputElement.value = "";
}

function clearInputC() {
    var inputElement = document.getElementById("inpt");
    inputElement.value = "";
}

function delInput() {
    var inputElement = document.getElementById("inpt");
    var currentValue = inputElement.value;
    inputElement.value = currentValue.substring(0, currentValue.length - 1);
    if (!k) k = true;
}

// function reverce() {
//     var inputElement = document.getElementById("inpt");
//     var currentValue = parseFloat(inputElement.value);
//     inputElement.value = -currentValue;
// }

function doOperation(oper) {
    var inputElement = document.getElementById("inpt");
    var currentValue = inputElement.value;
    var val1 = parseFloat(currentValue.substring(0, count));
    var val2 = parseFloat(currentValue.substring(count+1));
    console.log(val1);
    console.log(val2);
    switch (oper) {
        case "+":
            return val1 + val2;
        case "-": 
            return val1 - val2;
        case "*":
            return val1 * val2;
        case "/":
            return val1 / val2;
        default:
            throw new Error("Неподдерживаемый оператор: " + operation);
    }
}

function calculateResult() {
    var historyElement = document.getElementById("history-display");
    var resultValue = doOperation(operat);
    var inputElement = document.getElementById("inpt");

    console.log("result: " + resultValue);
    count = 0;
    k = true;
    
    try {
        historyElement.value += inputElement.value + "=" + resultValue + '\n';
        inputElement.value = resultValue;
    } catch (error) {
        inputElement.value = "Error";
    }
}
