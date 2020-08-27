var express = require('express');
var router = express.Router();
let UserModel = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

// 회원가입
/* 1단계: 
1. user.js에 유저 추가하기
2. response 데이터 내보내기 */

router.post('/signup', async (req, res) => {
    const { id, name, password, email } = req.body;
    User.push({id, name, password, email});
    res.status(200).send(User);
});

module.exports = router;
