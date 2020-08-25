/* 비밀번호 암호화 실습
 */

 const fs = require('fs');
 const crypto = require('crypto');

 const title = 'password'
 const password = 'sopt26th'

 fs.writeFile(`${title}.txt`, password, (err, password) => {     
     if (err) return console.log(err.message);
     console.log(`${title}.txt 파일 생성 완료!`);
 })

 fs.readFile(`${title}.txt`, (err, password) => {
     if (err) return console.log(err.message);
     console.log(`${title} : "${password}"\n`);
     const salt = crypto.randomBytes(32).toString('hex');
     

 });

 const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512' , (err, deriveKey) => {
        if (err) throw err;
        const title2 = 'hashed'
        const hashed = deriveKey.toString('hex');

        fs.writeFile(`${title2}.txt`, hashed, (err, hashed) => {
            if (err) return console.log(err.message);
            console.log(`${title2} 파일 생성 완료!`)
        })

    });
 }