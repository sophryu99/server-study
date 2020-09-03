
const calculatorModule = require('./w2_mission_calculator.js');

var add = calculatorModule.add(1,3);
var subtract = calculatorModule.subtract(3,1);
var multiply = calculatorModule.multiply(1,3);
var divide = calculatorModule.divide(10,2);
console.log("add", add);
console.log("subtract", subtract);
console.log("multiply", multiply);
console.log("divide", divide);

