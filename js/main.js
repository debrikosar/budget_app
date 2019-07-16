let startButton = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0];
let daybudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0];
let yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expenses = document.getElementsByClassName("expenses-item");

let expensesConfirm = document.getElementsByTagName("BUTTON")[0];
let optionalExpensesConfirm = document.getElementsByTagName("BUTTON")[1];
let countButton = document.getElementsByTagName("BUTTON")[2];

expensesConfirm.disabled = true;
optionalExpensesConfirm.disabled = true;
countButton.disabled = true;

let optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income");
let savings = document.querySelector("#savings");
let chooseSum = document.querySelector(".choose-sum");
let choosePercent = document.querySelector(".choose-percent");

let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

let test = document.getElementsByClassName("title");

let money, time;

startButton.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesConfirm.disabled = false;
    optionalExpensesConfirm.disabled = false;
    countButton.disabled = false;

});

expensesConfirm.addEventListener("click", function () {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
        let a = expenses[i].value,
            b = expenses[++i].value;

        if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesConfirm.addEventListener("click", function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;

        optionalexpensesValue.textContent += appData.optionalExpenses[i] + '';
    }
});

countButton.addEventListener("click", function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Максимальный уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener("input", function () {
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 + percent;
        appData.yearIncome = sum / 100 + percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener("input", function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 + percent;
        appData.yearIncome = sum / 100 + percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};