# server_study

🔆 server study repository 🔆 - 서버 뉴비의 기본기를 쌓기 위한 셀프 스터디

참고자료: 생활코딩, 26th Server seminar 자료



## Javascript

### Scope

<u>Function Scope</u>

- function 블록만을 범위로 인정
- 전역 함수 외부에서 생성한 변수는 모두 전역 변수

<u>Block Scope</u>

- 블록의 범위는 if, while, for, funciton 등의 중괄호 코드 블록 내부에서만 유효
- 코드 블록 외부에서는 참조 불가능



### JSON

**자바스크립트 객체 표현식**

- 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합

- 클라와 통신 시 주로 사용 - application/json

```js
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
```



## Node.js

🌟 변수 선언 방법

**var**: 변수, function scope

**let**: 상수, block scope

=> 그렇다면 **const는**?

let과 const의 차이는 변수의 **immutable** 여부이다. let은 변수에 **재할당**이 가능하지만, const는 변수 **재선언, 재할당** 모두 **불가능**하다.



## 흐름 제어

🌟 **동기**(sync)와 **비동기**(async)의 차이 (*중요!!*)

쉽게 말하면 상대방의 <u>일정 신호에 의해서 다음 동작이 일어나면</u> **동기**, <u>상대방의 상태와 상관없이 일방적으로 동작</u>하면 **비동기**라고 한다!



> 예를 들어 siren 소리를 낼때: 
>
> play_sound("siren.wav","동기")
> a=b+c;
> => 이러면 사이렌 소리가 다 **끝난후** a=b+c가 실행되고
>
> play_sound("siren.wav","비동기")
> a=b+c;
>
> => 이러면 a=b+c 이하 프로그램을 계속 **수행하면서** siren소리가 난다.



🔥 node.js에서는 **비동기 언어**이다. 따라서 어떤 작업이 먼저 끝날지 모르는데, 순차적인 작업을 위해서 있는 흐름제어 방식이 **promise**이다!!



**🌟Promise**: ES6부터 공식적으로 포함된 흐름 제어 패턴 내부적 예외처리 구조

- pending: 작업이 새로 생성된 시점의 상태
- fulfilled: 작업이 성공적으로 완료된 상태
- rejected: 작업이 실패한 상태

```javascript
// 작업성공
new Promise(function(resolve, reject) {
  resolve();
});
// 작업실패
new Promise(function(resolve, reject) {
  reject();
});
```

**🌟Promise chaining**: 여러개의 프로미스를 연결하여 사용

```javascript
const promise = func1('sopt')

// 이런식으로 중첩해서 많이 사용한다!
promise
.then((result) => func2(result))
.then((result) => func3(result))
.catch((result) => console.error(result)) // errorhandler1
```



**🌟Async & Await**: ES7부터 지원하는 자바스크립트 비동기 패턴! 장황한 Promise코드를 한 번 더 깔끔하게 줄여줌! 기존의 *비동기 처리 방식인 콜백함수*와 *Promise의 단점을 보완하여 읽기 좋은 코드*로 만들어 준다.

- promise를 사용하지 않고도 효과적으로 콜백헬을 해결함. Async는 암묵적으로 promise를 반환
- Await: Promise를 기다림 ( 성공 or 실패 ) async로 정의된 내부에서만 사용 가능

```javascript
// 기본 문법
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```



## Module

### node.js 내장모듈

**🌟crypto**: 문자열을 암호화, 복호화, 해싱하는 모듈

- 복호화할 수 없는 암호화 방식
- 비밀번호 암호화에 주로 사용 
- 주로 해시기법을 사용

```js
/* 
crypto.createHash(algorithm<string>) : 암호화 알고리즘. <Hash> 값을 반환, 주로 sha512를 사용
hash.update(data<string>) : 변환할 문자열을 넣어줌
hash.digest(encoding) : 인코딩할 알고리즘을 넣어줌 (base64, hex, latin1), 고정된 길이 값을 설정, 변환된 문자열을 반환
*/
const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex');
```



<u>비밀번호 저장 방법</u>

1. 단순 텍스트 -> 비추
2. Hashing 
3. Hashing with salt: 패스워드에 소금을 쳐서 암호화
4. Key stretching: 패스워드에 소금을 쳐서 암호화 과정을 N번 실행



```js
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
// pbkdf2 (비밀번호, 솔트 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback)
```



**🌟File system module**: 파일 시스템에 접근하는 모듈

- 파일 생성, 삭제, 읽기, 쓰기 등 수행 OR 폴더 생성, 삭제



## Express

**🌟Express**: Node를 위한 빠르고 간결한 웹 프레임워크

- HTTP 요청에 대해 라우팅 및 미들웨어 기능 제공



**🌟Express 구조**

- bin/www
  - 서버를 실행하는 스크립트: 프로젝트에 할당되는 포트 번호를 바꿀 수 있음
- public/
  - 각종 리소스들 포함: 이미지, css, js etc.
- routes/
  - 페이지 라우팅과 관련된 파일 저장: 주소별로 라우터들을 모아둠
  - URL별로 실행되는 실제 서버 로직
  - <u>index.js을 시작으로 관리해주면 됨!</u>
- views/
  - Jade, ejs 등 템플릿 파일을 모아둠
  - 웹 서버 사용 시 해당 폴더의 파일들을 사용해서 렌더링
- /app.js
  - 프로젝트의 중심
  - 핵심적인 서버 역할
  - 미들웨어 관리가 이루어짐
  - 라우팅의 시작점
- /package.json
  - npm 의존성 파일들
  - 현재 프로젝트에 사용된 모듈을 설치하는데 필요한 내용을 담음



**🌟 routing**이란? 

- URI(또는 경로) 및 특정한 HTTP 요청 메소드 (GET, POST 등) 인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정
- Express에서는 app.js에서 모든 요청 경로를 처리하지 않고, routes 폴더 아래의 index.js를 기준으로 파일들을 추가하며 정리
- 한 파일에 모든 라우팅을 관리하는 건 지양



Express project **실행시키기**!

> 1. 최상위 폴더에서 sudo npm install –g express-generator
> 2. express "project" 
> 3. ./project 에서 npm install
> 4. ./project 에서 npm start



🔥 *코드를 수정했을 때는 실행돼있는 서버를 중단하고 (command+c) npm start를 다시 해주어야 한다!*



## HTTP 

🌟 HTTP Status code : 알아두기!

| Code    | Status                                             |
| ------- | -------------------------------------------------- |
| **200** | **Success**                                        |
| 201     | Created new resource from the server               |
| **204** | **Success - no content to return**                 |
| **304** | **Cache purpose - no modification**                |
| **400** | **Bad request - server did not interpret request** |
| **401** | **Unauthorized**                                   |
| **404** | **Not found - cannot find the resource/page**      |
| **500** | **Internal Server error**                          |



🌟 Request (Client -> Server)

1. URL 
2. Header (token 등의 부가적인 정보)
3. Body (XML, JSON 등의 데이터)



🌟 Response (Server -> Client)

1. Body (XML, JSON 등의 데이터)



## CRUD

🌟CRUD란? : 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능

| CRUD   | ACTION | HTTP Method | SQL    |
| ------ | ------ | ----------- | ------ |
| CREATE | 생성   | POST        | INSERT |
| READ   | 조회   | GET         | SELECT |
| UPDATE | 수정   | PUT         | UPDATE |
| DELETE | 삭제   | DELETE      | DELETE |



## Database



## Transaction

🌟 **Transaction이란**? : 데이터베이스의 상태를 변화시키기 위해 수행하는 작업의 단위 -> 여러 단계의 처리를 하나처럼 다룸

- commit: transaction의 실행 결과를 데이터베이스에 <u>반영하는 것</u>
- Roll-back: transaction의 실행 결과를 반영하지 않고 원상태로 <u>되돌리는 것</u>



```javascript
// transaction 적용 시작
connection.beginTransaction(config)

// transaction 내 모든 쿼리 완료 후 결과 반영
connection.commit()

// transaction 내 모든 쿼리가 정상적으로 마치지 못했다면 원상태로 돌려놓음
connection.rollBack()
```



## Sequelize

🌟 **Sequelize란?**: nodejs에서 mysql을 쉽게 다룰 수 있도록 도와주는 라이브러리

- sequelize는 ORM(Object-Relational Mapping)로 분류가 된다. ORM 은 간단하게 **객체와 관계형 데이터베이스의 관계를 매핑 해주는 도구**이다. sequelize를 사용하면 자바스크립트 코드로 mysql을 제어할 수 있기 때문이다.



1. `sequelize init`을 통해 호출을 하면 config, models, migrations, seeders 폴더가 생기는데 models안에 index.js를 수정해야 한다!

```
> sequelize init
```

```javascript
/* sequelize\models\index.js */
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(
  path.join(__dirname + '..', 'config', 'config.json')
)[env];
const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
```





🌟 **Sequelize Migration**: 운영중인 데이터베이스를 변경하는 작업!

- 작업을 하다보면 사용중인 디비의 데이터를 수정해야할 일이 생긴다. 그럴때는 이 방법을 사용하면 된다!

1. config.json 파일에서 database 정보 수정하기

2. 데이터를 받아오는 구조체 파일.js에서 정보 수정하기

3. 최상위 폴더에서 $ sequelize migration:create --name 'name'

4. 위의 명령어를 실행하면 migrations 폴더에 타임스탬프가 찍힌 파일이 하나 생성된다. eg. 20160113211643-unnamed-migration.js

5. 이 파일은 해당 코드 템플릿으로 구성되어 있다. 이 모듈은 `up()`과 `down()` 메소드를 노출하는데 각 각 마이그레이션과 롤백을 담당한다. `up()` 함수에 새로운 컬럼을 추가하는 코드를 작성하면, `down()` 함수에는 추가한 컬럼을 삭제하는 코드를 작성하는 식이다!

   ```js
   "use strict"
   
   module.exports = {
     up: function (queryInterface, Sequelize) {
       /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.
   
         Example:
         return queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
     },
   
     down: function (queryInterface, Sequelize) {
       /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
   
         Example:
         return queryInterface.dropTable('users');
       */
     },
   }
   ```

   

