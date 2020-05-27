function add(num1,num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1,num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1,num2) {
    return Number(num1) * Number(num2);
}

function divide(num1,num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, num2, opt) {
    let result=0;
    switch (opt) {
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
        default:
            result = 0;
    }
    numberOne = result;
    numDisplay.value = result;
}

function setNumber(num) {
    if(clearDisplay) {
        numDisplay.value = '';
    }
    if(num==='') {
        numDisplay.value='';
    } else {
        if (numDisplay.value==='0') {
            numDisplay.value=num;
        } else {
            numDisplay.value=numDisplay.value+num;
        }
    }
    clearDisplay = false;
}


const numDisplay=document.getElementById('numValue');
const numButton=document.getElementsByClassName('numButton');
const operButton=document.getElementsByClassName('operButton');
let numberOne=0;
let numberTwo=0;
let task;
let firstOperation=true;
let clearDisplay=false;

for (let i=0;i<numButton.length;i++) {
    numButton[i].addEventListener('click',function (e) {
        setNumber(e.target.value);
    });
}

for (let i=0;i<numButton.length;i++) {
    operButton[i].addEventListener('click',function (e) {
        if(firstOperation) {
            firstOperation = false;
            numberOne = numDisplay.value;
            clearDisplay = true;
        } else {
            numberTwo = numDisplay.value;
            clearDisplay = true;
            operate(numberOne,numberTwo,e.target.value);    
        }
    });
}
