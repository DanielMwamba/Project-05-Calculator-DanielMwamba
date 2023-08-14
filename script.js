{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

//selectionner les elements du DOM


const inputElement = document.getElementById('input');
const calculElement = document.getElementById('calcul');
const resetButton = document.getElementById('reset');
const clearButton = document.getElementById('clear');
const plusOuMoinsButton = document.getElementById('plusoumoins');
const percentageButton = document.getElementById('percentage');
const divideButton = document.getElementById('divideby');
const timesButton = document.getElementById('times');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const equalsButton = document.getElementById('equals');
const numpadButtons = document.querySelectorAll('.numpad');


let currentValue;
let previousValue;
let operatorSign = '';
let display = '';

function btnValue(event) {
    inputElement.value = event.target.innerText;

    switch (event.target.innerText) {
        case "1":
            display += "1";
            break;
        case '2':
            display += '2';
            break;
        case '3':
            display += '3';
            break;
        case '4':
            cdisplay += '4';
            break;
        case '5':
            cdisplay += '5';
            break;
        case '6':
            display += '6';
            break;
        case '7':
            display += '7';
            break;
        case '8':
            display += '8';
            break;
        case '9':
            display += '9';
            break;
        case '0':
            if (display === '') {
                display += '0';
            }
            else if (display > 0 || display.includes('.')) {
                display += '0';
            }

            break;

        case '.':
            if (display.includes('.') || display === '') {

            }
            else {
                display += '.'
            }
            break;

    }

    inputElement.value = display;

}
// recuperer la valeur de la touche

numpadButtons.forEach((number) => {
    number.addEventListener('click', btnValue);

});


// function reset

function reset() {
    location.reload;
}

resetButton.addEventListener('click', reset);

// function clear

function clear() {
    inputElement.value = '';
    display = '';
}
clearButton.addEventListener('click', clear);

// function pour addition

function addition(event) {
    event.preventDefault();

    if (display) {
        operatorSign = '+';
        calculElement.innerText = calculElement.innerText + ' ' + inputElement.value + ' +';
        clear();
    } else {
        clear();
    }
}

plusButton.addEventListener('click', addition);


// function pour soustraction

function soustraction(event) {
    event.preventDefault();

    if (display) {
        operatorSign = '-';
        calculElement.innerText = calculElement.innerText + ' ' + inputElement.value + '-';
        clear();
    } else {
        clear();
    }
}

minusButton.addEventListener('click', addition);


// function pour division

function division(event) {
    event.preventDefault();

    if (display) {
        operatorSign = '/';
        calculElement.innerText = calculElement.innerText + ' ' + inputElement.value + ' /';
        clear();
    } else {
        clear();
    }
}

divideButton.addEventListener('click', division);


// function pour multiplication

function multiplication(event) {
    event.preventDefault();

    if (display) {
        operatorSign = '*';
        calculElement.innerText = calculElement.innerText + ' ' + inputElement.value + ' *';
        clear();
    } else {
        clear();
    }
}

timesButton.addEventListener('click', multiplication);

// function pour plusoumoins

function plusoumoins(event) {
    event.preventDefault();

    if (display) {
        if (inputElement.value.includes('-')) {

        }
        inputElement.value = display;

    } else {
        inputElement.value = '.' + display;
    }
}

plusOuMoinsButton.addEventListener('click', plusoumoins);

// function pourcentage

function pourcentage(event) {
    event.preventDefault();
    display.innerText = inputElement.value + '%';
    inputElement.value = parseInt(inputElement.value) / 100;
}

percentageButton.addEventListener('click', pourcentage);


// function egal

function egal(event) {
    event.preventDefault();

    if (calculElement.innerText.includes('=')) {

    } else {
        calculElement.innerText = calculElement.innerText + ' ' + inputElement.value;

        inputElement.value = eval(calculElement.innerText);
        calculElement = calculElement.innerText + ' ' + '=';
    }
}

equalsButton.addEventListener('click', egal);