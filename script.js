let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '(' && value !== ')' && value !== '√' && value !== '%') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Generate buttons dynamically and attach event listeners
const buttonValues = ['1', '2', '3', '+', '(', '4', '5', '6', '-', ')', '7', '8', '9', '*', '√', '0', 'C', '=', '/', '%'];

buttonValues.forEach(value => {
    const button = document.createElement('div');
    button.className = 'button';
    button.textContent = value;
    button.addEventListener('click', () => {
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    });
    document.querySelector('.buttons').appendChild(button);
});
