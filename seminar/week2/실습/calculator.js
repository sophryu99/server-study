/* 실습: 계산기 모듈 만들어보기 
add, subtract, multiply, divide

main.js에서 컨솔에 출력해보기
*/

module.exports = {
    add : (a,b) =>{
        return a+b;
    },
    subtract : (a,b) => {
        return a-b;
    },
    multiply : (a,b) => {
        return a*b;
    },
    divide : (a,b) => {
        return a/b;
    },
}

