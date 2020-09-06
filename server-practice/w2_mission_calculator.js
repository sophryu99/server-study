// 숫자 두개 이상 가능
// const calculator = {
//     add: (…args) => {
//         return args.reduce((a,b) => a + b)
//     },
//     sub: (…args) => {
//         return args.reduce((a,b) => a - b)
//     }
// }

// module.exports = calculator

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
    }
}