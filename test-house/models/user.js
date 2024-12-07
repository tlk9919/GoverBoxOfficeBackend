//引入数据库连接池引入数据库连接池
const pool=require('../config/dbConfig');
//定义查询用户是否存在的函数
function findUserByPhoneAndVerificationCode(phone, verificationCode){
    //使用 Promise 封装异步操作
    return new Promise((resolve, reject) => {
        //SQL 查询语句
        const sql = 'SELECT * FROM users WHERE phone = ? AND verificationCode = ?';
        pool.execute(sql,[phone, verificationCode], (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    })
}
module.exports = { findUserByPhoneAndVerificationCode };