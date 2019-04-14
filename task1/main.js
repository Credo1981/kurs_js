'use strict';

// console.log('Credo');
/*
let money = prompt('Ваш бюджет за месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');
*/
let money = '80000',
    time = '2019-01-01';


let appData = {};
appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;
// console.log(appData);
/*
let message1 = prompt('Введите обязательную статью расходов в этом месяце'),
    message2 = prompt('Во сколько обойдется?'),
    message3 = prompt('Введите обязательную статью расходов в этом месяце'),
    message4 = prompt('Во сколько обойдется?');
*/
let message1 = 'Еда',
    message2 = '10000',
    message3 = 'Одежда',
    message4 = '6000';


appData.expenses.message1 = message2;
appData.expenses.message3 = message4;

// alert(appData.budget / 30);
console.log(appData.budget / 30);
// console.log(appData.expenses.message1);