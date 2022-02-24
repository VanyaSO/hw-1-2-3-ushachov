"use strict";

let firstNumber = prompt('Введите певрое число');
let secondNumber = prompt('Введите второе число');

let additionResult = Number(firstNumber) + Number(secondNumber);
let subtractionResult = firstNumber - secondNumber;
let divisionResult = firstNumber / secondNumber;
let multiplicationResult = firstNumber * secondNumber;

console.log('Результат:', firstNumber,'+',secondNumber,'=', additionResult);
console.log('Результат:', firstNumber ,'-', secondNumber,'=', subtractionResult);
console.log('Результат:', firstNumber ,':', secondNumber,'=', divisionResult);
console.log('Результат:', firstNumber ,'*', secondNumber,'=', multiplicationResult);