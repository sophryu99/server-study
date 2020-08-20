// Promise: ES6부터 포함된 흐름제어 패턴, 내부적 예외처리 구조

// Promise의 세가지 상태
// 1. pending: 최초 생성된 시점의 상태
// 2. fulfilled: 작업이 성공적으로 완료된 상태
// 3. rejected: 작업이 실패한 상태


// 콜백 함수 선언 가능
new Promise(function(resolve, reject){
    // logic

});

// 콜백함수인 resolve()를 아래와 같이 수행하는 것이 이행 상태
new Promise(function(resolve, reject){
    resolve();
});

new Promise(function(resolve, reject){
    reject();
});

// Promise chaining: 여러개의 프로미스를 연결하여 사용

