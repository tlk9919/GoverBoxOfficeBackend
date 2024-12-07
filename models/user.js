const pool = require('../config/dbConfig');

// 查询用户是否存在
function findUserByPhoneAndVerificationCode(phone, verificationCode) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE phone = ? AND verificationCode = ?';
        pool.execute(sql, [phone, verificationCode], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

module.exports = {
    findUserByPhoneAndVerificationCode
};
