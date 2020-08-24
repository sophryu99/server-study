/* 모듈이란? 독립된 기능을 하는 함수와 변수들의 집합
모듈 자체가 하나의 프로그램이면서 다른 프로그램의 부품으로 사용할 수 있음
재사용에 용이함!
*/

// 함수 만들어보기

// sum.js
function sum(a,b) {
    return a + b;
}

module.exports = sum;