//{ calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// selectionner les elements du DOM


const inputElement = document.getElementById('input');
const calculElement = document.getElementById('calcul');
const resetButton = document.getElementById('reset');
const clearButton= document.getElementById('clear');
const plusoumoinsButton = document.getElementById('plusoumoins');
const percentageButton = document.getElementById('percentage');
const divideButton = document.getElementById('divideby');
const timesButton = document.getElementById('times');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const equalsButton = document.getElementById('equals');
const numpadButtons = document.querySelectorAll('.numpad');
const dotButton = document.querySelector('.dot');

let currentValue = '';
let previousValue = '';
let calcul = false;

function button() {
    console.log('je reset');
}


// Ajout des evenements

resetButton.addEventListener('click', reset);
clearButton.addEventListener('click', clear);
plusoumoinsButton.addEventListener('click',()=> plusoumoins());
percentageButton.addEventListener('click', () => percentage());
divideButton.addEventListener('click', () => setOperator('/'));
timesButton.addEventListener('click', () => setOperator('*'));
minusButton.addEventListener('click', () => setOperator('-'));
plusButton.addEventListener('click', () => setOperator('+'));
equalsButton.addEventListener('click', () => calculate());

//Ajout des evenements au bouton numeriques

numpadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value= button.textContent;
        appendValue(value);
    });
});


//Ajout des evenements au bouton de a virgule

dotButton.addEventListener('click', () => appendDot())


