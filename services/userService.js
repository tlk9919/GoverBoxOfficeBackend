const userModel = require('../models/user'); // 引入模型
const jwtUtils = require('../utils/jwtUtils'); // 引入JWT工具

// 用户登录
async function loginUser(phone, verificationCode) {
    try {
        const users = await userModel.findUserByPhoneAndVerificationCode(phone, verificationCode);

        if (users.length === 0) {
            throw new Error('手机号或验证码错误');
        }

        const user = users[0];
        const token = jwtUtils.generateToken(user.id, user.name);

        return {
            message: '登录成功',
            user: { id: user.id, name: user.name, phone: user.phone },
            token
        };
    } catch (err) {
        throw err; // 抛出错误
    }
}

module.exports = {
    loginUser
};
