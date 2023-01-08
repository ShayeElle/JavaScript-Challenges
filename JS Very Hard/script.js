// Operator Input
const operator = prompt('Enter operator ( select +, -, * or / ): ');

// Number Inputs
//parseInt is used to convert the user input string to number.
const number1 = parseInt (prompt('Enter first number: '));
const number2 = parseInt (prompt('Enter second number: '));

// Functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  

// using if...else if... else
if (operator === '+') {
    console.log(`${number1} + ${number2} = ${add(number1, number2)}`);}

else if (operator === '-') {
  console.log(`${number1} - ${number2} = ${subtract(number1, number2)}`);} 
  
else if (operator === '*') {
  console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);} 
  
else if (operator === '/') {
  console.log(`${number1} / ${number2} = ${divide(number1, number2)}`); }
