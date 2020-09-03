var express = require('express');
var router = express.Router();
let UserModel = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');
const { route } = require('.');
const crypto = require('crypto');


/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

// 1단계
// router.post('/signup', async (req, res) => {
//     const { id, name, password, email } = req.body;
//     UserModel.push({id, name, password, email});
//     res.status(200).send(UserModel);
// });


// 2단계
// router.post('/signup', async (req, res) => {
//     const { id, name, password, email } = req.body;
//     // request data 확인 - 없다면 Bad Request 반환
//     if ( !id || !name || !password || !email ) {
//         return res.status(400).send({ message: 'BAD REQUEST' });
//     }
//     //already ID
//     if (UserModel.filter(user => user.id == id).length > 0) {
//         return res.status(400).send({ message: 'ALREADY ID' });
//     }
//     UserModel.push({id, name, password, email});
//     res.status(200).send(UserModel);
// });

// 3단계
router.post('/signup', async (req, res) => {
    const {
        id,
        name,
        password,
        email
    } = req.body;
    // request data 확인 - 없다면 Null Value 반환
    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    // already ID
    // filter(): 주어진 배열의 조건을 통과하는 모든 요소를 모아 새로운 배열로 반환
    if (UserModel.filter(user => user.id == id).length > 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
    }

    // 비밀번호 salt값으로 저장하기
    const salt = crypto.randomBytes(32).toString('hex');
    const hashed = crypto.pbkdf2Sync(password, user[0].salt.toString(), 100000, 32, 'sha512').toString('hex');

    UserModel.push({
        id,
        name,
        password,
        email
    });
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_USER, {
            userId: id
        }));
});

/* 
    ✔️ sign in
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, password
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

//로그인
router.post('/signin', async (req, res) => {
    // request body 에서 데이터 가져오기
    const {
        id,
        password
    } = req.body;
    // request data 확인 - 없다면 Null Value 반환
    if (!id || !password) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    const user = UserModel.filter(user => user.id == id);
    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    if (user.length == 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }

    // 비밀번호 salt 값으로 저장하기
    const salt = crypto.randomBytes(32).toString('hex');
    const hashed = crypto.pbkdf2Sync(password, user[0].salt.toString(), 100000, 32, 'sha512').toString('hex');
    
    // 비밀번호 확인 - 없다면 Miss match password 반환
    if (user[0].password !== hashed ) {
        res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW));
        return;
    }
    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {userId: id, userPw1:user[0].password, userPw2:hashed}));
});


//프로필조회
router.get('/profile/:id', async (req, res) => {
    // request params 에서 데이터 가져오기
    const id = req.params.id;
    const user = UserModel.filter(user => user.id == id)[0];
    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    if (user === undefined) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }
    const dto = {
        id: user.id,
        name: user.name,
        email: user.email 
    }
    // 성공 - login success와 함께 user Id 반환
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, dto));
});

module.exports = router;
