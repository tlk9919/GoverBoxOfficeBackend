const userService = require('../services/userService'); // 引入服务层
const { sendVerificationCode } = require('../services/emailService'); // 引入发送验证码的函数

// 登录控制器
async function login(req, res) {
    const { idCard, phone, verificationCode } = req.body;

    // 验证必填字段
    if (!idCard || !phone || !verificationCode) {
        return res.status(400).json({ message: '身份证号、手机号或验证码不能为空' });
    }

    try {
        // 调用服务层的登录方法
        const user = await userService.loginUser(idCard, phone, verificationCode);

        // 返回成功的响应，包含用户信息和Token
        return res.status(200).json(user);

    } catch (err) {
        // 返回错误信息
        if (err.message === '身份证号或手机号不存在') {
            return res.status(404).json({ message: '用户不存在' });
        }
        if (err.message === '验证码错误') {
            return res.status(400).json({ message: '验证码错误' });
        }
        return res.status(500).json({ message: '服务器内部错误' });
    }
}
