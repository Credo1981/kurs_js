'use strict';

// Условия

let a = 17;
if (a == 10) {
    console.log('Это десять');
}else {
    console.log('Это НЕ десять');
}

let b = 40;
switch(b) {
    case 17: 
        console.log('Ещё малой');
        break;
      
    case 23:
        console.log('Старый');
        break;
    case 21:
        console.log('В самый раз');
        break;
    default:
        console.log('Не знаю');
        break;
}
