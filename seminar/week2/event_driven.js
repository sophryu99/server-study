// event_driven: 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식

function greet() {
    return "Hello!";
}

function timer() {
    return setTimeout(()=> {
        return "End!";
    }, 3000);
}

// greet();
// timer();

// 실습

function task1() {
    setTimeout(() => {
        console.log('task1');
    }, 0);
}

function task2() {
    console.log('task2');
}

function task3() {
    console.log('task3');
}

task1();
task2();
task3();

// task2, task3, task1 순서로 실행됨!