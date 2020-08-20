// json: 자바스크립트 객체 표현식

// 자바스크립트 객체 표현식
// 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합
// 클라와 통신 시 주로 사용 - application/json

// json 객체 실습
var sehwa = {
    name: 'sehwa ryu',
    age : 22,
    part : 'iOS',
    study : ['happy-algorithm', 'wangchobo'],
    printName : function () {
        console.log('name', this.name)
    }, 
    printAge : function () {
        console.log('age', this.age)
    }

}

console.log('typeof sehwa : ' + typeof sehwa); // 타입 값만 출력
console.log('sehwa : ' + sehwa); // []로 출력
console.log('sehwa : ', sehwa); // {}로 객체 전체 출력
console.log('sehwa :' + JSON.stringify(sehwa)); //{} 딕셔너리 형태로 print (확실X)

sehwa.printName();
sehwa.printAge();

// json 배열 실습

var dogs = [
    {name : '레브라도 리트리버', age : 10, weight: '23kg'},
    {name : '웰시코기', age : 3, weight : '5kg'}
];

console.log('dogs : ' + dogs);
console.log('dogs : ', dogs);
console.log('dogs :' + JSON.stringify(dogs));

dogs.forEach(
    dog => console.log(dog.name+'이는 종이 '+dog.family+'이고,'+dog.age+'살입니다')
);