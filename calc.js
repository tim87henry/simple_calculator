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
    if (num2==='0') {
        alert("Divide by zero not allowed");
        numberOne = numberTwo = 0;
        firstOperation = true;
        return 0;
    } else {
        return Number(num1) / Number(num2);
    }
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
        case '=':
            result = numberOne;
            break;
        default:
            result = 0;
    }
    lastKeyIsANumber = false;
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
        if (num === '.') {
            if (numDisplay.value.match(/\./g)===null) {
                numDisplay.value=numDisplay.value+num;
            }
        }
        else if (numDisplay.value==='0') {
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
let lastKeyIsANumber=false;

for (let i=0;i<numButton.length;i++) {
    numButton[i].addEventListener('click',function (e) {
        setNumber(e.target.value);
        lastKeyIsANumber = true;
    });
}

for (let i=0;i<operButton.length;i++) {
    operButton[i].addEventListener('click',function (e) {
        if (e.target.value==='C') {
            numDisplay.value = '0';
            numberOne = numberTwo = 0;
            firstOperation = true;
        } else if (e.target.value==='DEL') {
            if (lastKeyIsANumber) {
                numDisplay.value = numDisplay.value.slice(0,numDisplay.value.length-1); 
                lastKeyIsANumber = true;
            }
        } else if (firstOperation) {
            firstOperation = false;
            numberOne = numDisplay.value;
            task = e.target.value;
            clearDisplay = true;
        } else {
            numberTwo = numDisplay.value;
            clearDisplay = true;
            operate(numberOne,numberTwo,task);
            task = e.target.value;
        }
    });
}
