// 배열 요소의 타입이 고정되어 있지 않음
// 같은 배열에 있는 배열 요소끼리의 타입이 서로 다를 수 있다

// 배열 요소의 인덱스가 연속적이지 않아도 됨
// - 따라서 특정 배열 요소가 비어있을 수도 있음

// 기본 형태
// arr = [요소1, 요소2, 요소3]

// ** 실습 **
//1. 배열 생성

var server1 = ["류세화", "이솝트", 21, null, true];
var server2 = Array("라랄", "김정민", 13);
var server3 = new Array("김솝트", "최솝트", false, undefined);

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

//2. 배열 추가
server1.push(123); //push로 마지막에 추가
server2[server2.length] = "새롭게 넣기"; // length로 마지막에 추가
server3[99] = "99번째 인덱스"; // 95개의 empty item 뒤에 새로운 스트링 요소 추가

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

// 3. 배열 순회

// 엘레멘트를 하나씩 가져오는 방법
let str1 = 'server1 아이템들은 "';
for (var item of server1) {
    str1 += item + ', ';
}
str1 += '"입니다';
console.log(str1);

// 인덱스를 하나씩 가져오는 방법
let str2 = 'server2 아이템들은 "';
for (var item in server2) {
    str2 += server2[item] + ', ';
}
str2 += '"입니다';
console.log(str2);

// 엘레먼트를 하나씩 가져오는 방법
// callback (?) 함수를 가져올 수 있음
let str3 = 'server3 아이템들은 "';
server3.forEach( item => str3 += item + ', ');
str3 += '"입니다';
console.log(str3);