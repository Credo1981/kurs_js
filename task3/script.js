console.log('Credo');
'use strict';
/* 
    Расчет расходов на один день
*/

let money, time;            // Объявление глобальных переменных для получение от пользователя бюджета и даты

// Функция start() запрашивает у пользователя значения бюджета и даты до тех пор пока пользователь не введет бюджет
function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt('Введите дату в формате, YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", '');
    }
}

start();

/* Объект appData предназначен для хранения данных о следующих параметрах:
*/
let appData = {
    budget: money,          // бюджет
    expenses: {},           // расходы
    optionalExpenses: {},   // дополнительные расходы
    income: [],             // доход
    timeData: time,         // дата, введенная пользователем
    saving: false            // сбережения
};

// Функция chooseExpenses() запрашивает у пользователя наименование статьи расходов, а также количество денег
// которые планируется потратить на данную статью.
// Если пользователь дважды ввёл не верные данные на вопросы, то программа игнорирует ввод и выполняется далее.
function chooseExpenses() {
    for (var i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце ", ''),
            b = prompt("Во сколько обойдётся? ", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        }else {
            i = i - 1;
        }
    }
    
}

chooseExpenses();

/*
3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
Записать ответы в объект optionalExpenses в формате Номер - Ответ.
optionalExpenses: {
1 : “ответ на вопрос”
}*/
function chooseOptExpenses(){
    for(var i = 0; i < 3; i++){
        answer = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = answer;
        console.log(appData.optionalExpenses);
    }
    
}

chooseOptExpenses();


// Вычисление бюджета на месяц
// Создание свойства moneyPerDay - присвоение ему соответствующего значения, округлённого до целого знака.
appData.moneyPerDay = (appData.budget / 30).toFixed();

// Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
function detectDayBudget() {

    document.write("Ежедневный бюджет: " + appData.moneyPerDay);

}
 
// detectDayBudget();

// Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    }else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    }else {
        console.log('Произошла ошибка');
    }
}
detectLevel();  

// Накопления с депозита если он есть
function checkSaving() {
    if (appData.saving == true) {
        let save = prompt('Какова сумма накоплений? '),
            percent = prompt('Под какой процент? ');

        appData.monthIncome = save / 100 / 12 * percent;
        alert ('Доход в месяц с вашего депозита: ' + appData.monthIncome.toFixed(2));
    }
}

checkSaving();
