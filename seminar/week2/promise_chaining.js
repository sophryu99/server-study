// Promise chaining: 여러개의 프로미스를 연결하여 사용

// then API
// <Promise>.then() : 비동기 작업 완료시 결과에 따라 함수 호출

// catch API
// <Promise>.catch() : 체이닝 상태로 연결 중 비동기 작업이 중간에 에러가 났을때 호출

const func1 = (param) => {
    return new Promise ((resolved, rejected) => {
        setTimeout(() => {
            console.log('func1 return resolved');
            resolved ('func1 success: ${param}\n');
        }, 500);
    });
}

const func2 = (param) => {
    return new Promise ((resolved, rejected) => {
        setTimeout(() => {
            console.log('func2 return rejected');
            rejected (new Error ('func2 error: ${param}\n'));
        }, 500);
    });
}

const func3 = (param) => {
    return new Promise ((resolved, rejected) => {
        setTimeout(() => {
            console.log('func3 return resolved');
            resolved ('func3 success: ${param}\n');
        }, 500);
    });
}

const func4 = (param) => {
    return new Promise ((resolved, rejected) => {
        setTimeout(() => {
            console.log('func4 return rejected');
            rejected (new Error ('func4 error: ${param}\n'));
        }, 500);
    });
}

const func5 = (param) => {
    return new Promise ((resolved, rejected) => {
        setTimeout(() => {
            console.log('func5 return resolved');
            resolved ('func5 success: ${param}\n');
        }, 500);
    });
}

// promise 객체를 then으로 연쇄적으로 실행

const promise = func1('sopt')

promise
.then((result) => func2(result))
.then((result) => func3(result))
.catch((result) => console.error(result)) // errorhandler1
.then((result) => func4(result))
.then((result) => func5(result))
.catch((result) => console.error(result)) // errorhandler2
.then((result) => console.log(result));
