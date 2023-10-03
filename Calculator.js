let inputField = document.getElementById("display");

function addToInput(value) {
    inputField.innerHTML += value;
}


function procent() {
    
}

function clearInputCE() {

}

function clearInputC() {

}

function delInput() {

}

function division() {
    
}

function multiplication() {
    
}

function add() {
    
}

function sub() {
    
}

function reverce() {
    
}

function calculateResult() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = "Ошибка";
        console.log("err");
    }
}