'use strict';
let money = +prompt('Ваш бюджет на месяц?', '100');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let bindingExpenses = prompt('Введите обязательную статью расходов в этом месяце', 'Туалбум');
let bindingExpensesCost = +prompt('Во сколько обойдется?');
let appData = {
    budget: money,
    timeData: time,
    expenses: {
    bindingExpenses: bindingExpensesCost,
    },
    income: [],//необязательные расходы
    savings: false,
};


