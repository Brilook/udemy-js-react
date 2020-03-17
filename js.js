'use strict';
let money = +prompt('Ваш бюджет на месяц?', '100'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},//необязательные расходы
        income: [],//доп. доход
        savings: false,
    };
    
    let a1 = prompt('Введите обязательную статью расходов в этом месяце', 'Туалбум');
    let a2 = +prompt('Во сколько обойдется?');
    let a3 = prompt('Введите обязательную статью расходов в этом месяце', 'Туалбум');
    let a4 = +prompt('Во сколько обойдется?');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert ('бюбжет на день ' + appData.budget / 30);



