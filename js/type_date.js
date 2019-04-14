'use strict';

var number = 5;
var scring = "Hello";
var sum = Symbol();
var boolean  =true;
null;
undefined;
var obj = {};

console.log(4 / 0);             // Infinity
console.log('string' * 9);      // NaN

let something;
console.log(something);         // Undefined

// object
let persone = {                 
    name: 'John',
    age: 25,
    isMarried : false
};

console.log(persone.age);       // 25
console.log(persone['name']);   // John

// array
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);