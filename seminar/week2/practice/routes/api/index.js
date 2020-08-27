// express 모듈 & router() 미들웨어 불러오기
var express = require('express');
var router = express.Router();

// get method로 api 요청이 들어온다면
router.get('/', (req,res) => {
    // 해당 로직을 실행
    const result = {
        status : 200, 
        message : 'api'
    }
    res.status(200).send(result);
})

// 생성한 router 객체를 모듈로 반환
module.exports = router;