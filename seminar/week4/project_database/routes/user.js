const express = require('express');
const router = express.Router();
let User = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');
//const encrypt = require('../modules/crypto');

router.post('/signup', async (req, res) => {
    const {
        id,
        name,
        password,
        email
    } = req.body;
    if (!id || !name || !password || !email) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    // 사용자 중인 아이디가 있는지 확인
    if (User.checkUser(user)) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
    }
    const salt = 'dfw23EFVR3fefnd68FW3r4343';
    // User.push({id, name, password, email});
    const idx = await User.signup(id, name, password, salt, email);
    if (idx === -1) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
    }
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CREATED_USER, {userId: idx}));
});


router.post('/signin', async (req, res) => {
    const {
        id,
        password
    } = req.body;
    if (!id || !password) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }
    const user = User.filter(user => user.id == id);
    // User의 ID가 있는지 확인 후 없다면 NO_USER 리턴
    if (user.length == 0) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
        return;
    }

    // req의 비번 확인 후 일치하지 않으면 MISS_MATCH_PW 리턴
    if (user[0].password !== password ) {
        res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW));
        return;
    }

    // 로그인 성공
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {userId: id}));
});

module.exports = router;