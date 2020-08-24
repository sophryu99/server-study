// 함수버전
// const sum = require('./sum');

// var result = sum(1,3);
// console.log("sum result : ", result);

// 객체버전
// const sumModule = require('./sum');
// var result = sumModule.sum(1,3);
// console.log("sum result : ", result);

// 계산기 실습
const calcModule = require('./calculator.js');

var add = calcModule.add(1,3);
var subtract = calcModule.subtract(3,1);
var multiply = calcModule.multiply(1,3);
var divide = calcModule.divide(10,2);
console.log("add result : ", add);
console.log("subtract result : ", subtract);
console.log("multiply result : ", multiply);
console.log("divide result : ", divide);
