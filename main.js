const element = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

let counterValue = 0;

function updateCounter(newValue) {
    counterValue = newValue;
    element.textContent = counterValue;
}

function incrementCounter() {
    updateCounter(counterValue + 1);
}

function decrementCounter() {
    updateCounter(counterValue - 1);
}

plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);