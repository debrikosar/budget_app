let start = document.getElementById("start");

let budgetValue =  document.getElementsByClassName("budget-value");
let daybudgetValue =  document.getElementsByClassName("daybudget-value");
let levelValue =  document.getElementsByClassName("level-value");
let expensesValue =  document.getElementsByClassName("expenses-value");
let optionalexpensesValue =  document.getElementsByClassName("optionalexpenses-value");
let incomeValue =  document.getElementsByClassName("income-value");
let monthsavingsValue =  document.getElementsByClassName("monthsavings-value");
let yearsavingsValue =  document.getElementsByClassName("yearsavings-value");

let expenses = document.getElementsByClassName("expenses-item");

let expensesConfirm = document.getElementsByTagName("BUTTON")[0];
let optionalExpensesConfirm = document.getElementsByTagName("BUTTON")[1];
let count = document.getElementsByTagName("BUTTON")[2];

let optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income");
let savings = document.querySelector("#savings");
let chooseSum = document.querySelector(".choose-sum");
let choosePercent = document.querySelector(".choose-percent");

let yearValue= document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

let test = document.getElementsByClassName("title");

document.getElementsByClassName("title")[0].style.fontSize = "small";

console.log(test[0].textContent);