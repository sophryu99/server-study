const fs = require('fs');
const crypto = require('crypto');

fs.readFile('password.txt', (err, data) => {
    if(err) throw err
    crypto.pbkdf2(data, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err
        console.log(derivedKey.toString('hex'))
        fs.writeFile('hashed.txt', derivedKey.toString('hex'), (err) => {
            if(err) throw err
        })
    })
})