/* crypto: 문자열을 암호화, 복호화, 해싱하는 모듈

Hash: 어떤 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 형식

*/

const crypto = require('crypto');

const secret = 'abcdefg';

const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex');


console.log(hash);

// prints: c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e