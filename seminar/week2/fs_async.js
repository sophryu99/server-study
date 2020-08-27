/* file system async: 비동기 방식

*/


const fs = require('fs');

const numArr = [1,2,3,4,5];

numArr.forEach((num) => {
    const title = 'async' + num;
    const data = `파일 생성 완료!\n파일이름: '${title}.txt'`;
    // 파일 생성
    fs.writeFile(`${title}.txt`, data, (err,data) => {
        if (err) return console.log(err.messae);
        console.log(`${title} 비동기라 순서가 다름!`);
    });
});

numArr.forEach((num) => {
    const title = 'async' + num;
    // 파일 read 
    fs.readFile(`${title}.txt`, (err, data) => {
        if (err) return console.log (err.message);
        console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
    });
});