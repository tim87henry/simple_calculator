function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

function operate(num1, num2, opt) {
    let result=0;
    switch (opt) {
        case 'add':
            result = add(num1,num2);
            break;
        case 'sub':
            result = subtract(num1,num2);
            break;
        case 'mul':
            result = multiply(num1,num2);
            break;
        case 'div':
            result = divide(num1,num2);
            break;
        default:
            result = 0;
    }
}

function setNumber(num) {
    if(num==='') {
        number.value='';
    } else {
        if (number.value==='0') {
            number.value=num;
        } else {
            number.value=number.value+num;
        }
    }
}


const number=document.getElementById('numValue');
const numButton=document.getElementsByClassName('calcButton');
let numberOne;
let task;

for (let i=0;i<numButton.length;i++) {
    numButton[i].addEventListener('click',function (e) {
        
    });
}

