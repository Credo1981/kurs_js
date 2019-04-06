'use strict';

console.log('Credo');

let money = prompt('Ваш бюджет за месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

// let money = 80000;
// let time = '2019-04-06';

// Тестирование ввода
// console.log('money: ', money);
// console.log('time: ', time);

// Создать объект appData, который будет содержать такие данные:
let appData =  {};
// ·      бюджет (передаем сюда переменную из п.2)
    appData.budget = money;
// ·      данные времени - timeData (передаем сюда переменную из п.2)
    appData.timeData = time;
// ·      объект с обязательными расходами - expenses (смотри пункт 4)
    appData.expenses = {};
// ·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
    appData.optionalExpenses = {};
// ·      массив данных с доп. доходом - income (оставляем пока пустым)
    appData.income = [];
// ·      свойство savings (выставляем его как false)
    appData.savings = false;
console.log(appData);

// 4) Задать пользователю по 2 раза вопросы:
    // “Введите обязательную статью расходов в этом месяце”
    // let message1 = 'Еда';
    let message1 = prompt('Введите обязательную статью расходов в этом месяце');
    // “Во сколько обойдется?”
    // let message2 = '10000';
    let message2 = prompt('Во сколько обойдется?');
    // Записать ответы в объект expenses в формате: 

    // expenses: {
    // “ответ на первый вопрос” : “ответ на второй вопрос”
    // }
    appData.expenses = {message1 : message2};
    // 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
    let one_day = (appData.budget - appData.expenses.message1) / 30;
    alert(one_day);
// console.log("бюджет на 1 день: ", one_day);
console.log(appData);
    // 6) Проверить, чтобы все работало без ошибок в консоли
// let ver_one_day = (80000 - 10000) / 30;
// console.log(ver_one_day);
    // 7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием