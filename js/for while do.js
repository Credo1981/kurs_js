'use strict';

// Циклы

let num = 50;
while(num < 55){
    console.log(num);

    num++;
}

let a = 17;
do {
    console.log("Эй " + a + " лет");
    a++;
}
while(a < 19);


for(i = 0; i <= 8; i++){
    if(i == 6){
        // break;
        continue;
    }
    console.log(i);
}

