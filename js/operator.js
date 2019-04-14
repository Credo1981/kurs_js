'use strict';

// Конкатинация
let fruit = 'apple';
let vegetable = 'corn';
let eat = fruit + vegetable;
console.log(eat);

// Преобразование строки в число
let num_fruit = +fruit;
console.log(typeof(num_fruit));

// Логические операторы
let isChecked = true,
    isClose = false;
console.log(isChecked || isClose);          // true