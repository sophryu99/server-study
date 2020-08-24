/**async란? : ES7부터 지원하는 자바스크립트 비동기 패턴

장황한 promise코드를 한 번 더 깔끔하게 줄여줌
이해하기 쉽고 가독성이 좋다는 장점이 있음 **/

// 함수명 : 인자를 반환하는 함수 
let asyncFunc1 = (msg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`)
        }, 1000)
    })

let asyncFunc2 = (msg) => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`)
        }, 1000)
    })

function promiseMain() {
    asyncFunc1('Hello').then((result)=> {
        console.log(result)
        return asyncFunc2('world')
    }).then((result) => {
        console.log(result)
    })
}

async function asyncMain() {
    let result = await asyncFunc1('Hello')
    console.log(result)
    result = await asyncFunc2('world')
    console.log(result)
}
/*await을 빼면 pending 상태로 출력*/

promiseMain()
asyncMain()

/* promiseMain()와 asyncMain()를 동시 실행:
func1 : Hello
func1 : Hello
func2 : world
func2 : world
로 출력됨*/