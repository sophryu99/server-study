/* crypto: 문자열을 암호화, 복호화, 해싱하는 모듈

Hash: 어떤 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 형식

*/

const crypto = require('crypto');

const secret = 'abcdefg';

/* 
crypto.createHash(algorithm<string>) : 암호화 알고리즘. <Hash> 값을 반환, 주로 sha512를 사용
hash.update(data<string>) : 변환할 문자열을 넣어줌
hash.digest(encoding) : 인코딩할 알고리즘을 넣어줌 (base64, hex, latin1), 고정된 길이 값을 설정, 변환된 문자열을 반환
*/
const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex');

                    

console.log(hash);

// prints: c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

