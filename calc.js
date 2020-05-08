const number=document.getElementById('numValue');
let numberOne;
let task;
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

function operate(opt) {
    if (opt==='resolve') {
        switch (task) {
            case 'add':
                number.value=numberOne+Number(number.value);
                break;
            case 'sub':
                number.value=numberOne-Number(number.value);
                break;
            default:
                number.value=numberOne+Number(number.value);
        }
    } else {
        task=opt;
        numberOne= Number(number.value);
        number.value='';
    }
    
}