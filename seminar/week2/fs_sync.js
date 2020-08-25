/* file system module 동기 버젼 
*/

const fs = require('fs');

const numArr = [1,2,3,4,5];

numArr.forEach((num) => {
    const title = 'sync' + num;
    const data = `파일이 생성 완료!\n파일 이름은 '${title}.txt'`;
    fs.writeFileSync(`${title}.txt`, data);
    console.log(`${title} 동기라서 순서가 맞아용`);
});

numArr.forEach((num) => {
    const title = 'sync' + num;
    const data = fs.readFileSync(`${title}.txt`);
    console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
})