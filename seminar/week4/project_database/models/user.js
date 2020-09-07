const pool = require('../modules/pool');
const table = 'user';

const user = {
    signup: async (id, name, password, salt, email) => {
        const fields = 'id, name, password, salt, email';
        const questions = `?, ?, ?, ?, ?`;
        const values = [id, name, password, salt, email];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${questions})`;
        try {
            const result = await pool.queryParamArr(query, values);
            const insertId = result.insertId;
            return insertId;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('signup ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('signup ERROR : ', err);
            throw err;
        }
    },
    checkUser: async (id) => {
        // 디비에서 id의 값을 가진 사용자가 있는지 확인하기
        const query = `SELECT * FROM ${table} WHERE id="${id}"`;
        try {
            const result = await pool.queryParam(query);
            if (result.length === 0) {
                return false;
            } else return true;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('checkUser ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('checkUser ERROR : ', err);
            throw err;
        }
    },
    getUserById: async (id) => {
        // query 작성
        const query = `SELECT * FROM ${table} WHERE id ="${id}"`;
        // try - catch 로 error 받기
        // pool module로 전달해서 결과값 받기
        try {
            return await pool.queryParam(query);
        } catch (err) {
            console.log('checkUser ERROR :', err);
            throw err;
        }

    },
}

module.exports = user;