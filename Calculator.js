// Иногда при работе с десятичными дробями могут возникать ошибки
// Этот момент не до конца проработал

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

function doOperation(oper) {
    var inputElement = document.getElementById("inpt");
    var currentValue = inputElement.value;
    var val1 = parseFloat(currentValue.substring(0, count));
    if (count === inputElement.value.length) 
        return val1;

    // console.log(count);
    // console.log(inputElement.value.length);
    if (count + 1 === inputElement.value.length) {
        inputElement.value = inputElement.value + val1;
        val2 = val1;
    }
    else 
        var val2 = parseFloat(currentValue.substring(count+1));
    // console.log(val1);
    // console.log(val2);
    
    try{
        switch (oper) {
            case "+":
                return val1 + val2;
            case "-": 
                return val1 - val2;
            case "*":
                return val1 * val2;
            case "/":
                return val1 / val2;
        }
    } catch (error) {
        inputElement.value = "Error";
    }
}

function calculateResult() {
    var historyElement = document.getElementById("history-display");
    var resultValue = doOperation(operat);
    var inputElement = document.getElementById("inpt");

    // console.log("result: " + resultValue);
    k = true;
    
    try {
        historyElement.value += inputElement.value + "=" + resultValue + '\n';
        inputElement.value = resultValue;
        count = inputElement.value.length;
    } catch (error) {
        inputElement.value = "Error";
    }
}
