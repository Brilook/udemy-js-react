'use strict';
let money = +prompt('Ваш бюджет на месяц?', '100');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let requiredExpenses = prompt('Введите обязательную статью расходов в этом месяце', 'Туалбум');
let requiredExpensesCost = +prompt('Во сколько обойдется?');
let requiredExpenses2 = prompt('Введите обязательную статью расходов в этом месяце', 'Туалбум');
let requiredExpensesCost2 = +prompt('Во сколько обойдется?');
let appData = {
    budget: money,
    timeData: time,
    expenses: {
    requiredExpenses: requiredExpensesCost,
    requiredExpenses2: requiredExpensesCost2,
    },
    optionalExpenses: {//необязательные расходы

    },
    income: [],//доп. доход
    savings: false,
};

let month = 30;

let dailyBudget = money / month;

alert (`бюбжет на день ${dailyBudget}`);



