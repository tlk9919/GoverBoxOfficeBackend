const userModel = require('../models/user'); // 引入模型
const jwtUtils = require('../utils/jwtUtils'); // 引入JWT工具
async function loginUser(idCard, phone, verificationCode){
    try { //调用model,查找用户根据身份证和手机号查询
        const users = await userModel.findUserByIdCardAndPhone(idCard, phone, verificationCode);

        if (users.length === 0) {
            throw new Error('身份证号或手机号不存在');
        }
        const user = users[0];
        if (user.verifyIdentity !== verificationCode) {
            throw new Error('验证码错误');
        }
        // 验证成功，生成Token
        const token = jwtUtils.generateToken(user.id, user.name);

        return {
            message: '登录成功',
            user:user,
            token
        };
    } catch (err) {
        throw err;
    }

}


module.exports = {
    loginUser
};