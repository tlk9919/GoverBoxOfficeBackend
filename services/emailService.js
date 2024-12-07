const nodemailer = require('nodemailer');
require('dotenv').config(); // 加载 .env 文件

// 创建发送验证码的函数
async function sendVerificationCode(email) {
    // 生成6位验证码
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // 创建邮件传输对象
    const transporter = nodemailer.createTransport({
        service: '126', // 使用 126 邮箱
        auth: {
            user: process.env.EMAIL_USER,  // 发件人邮箱（从环境变量获取）
            pass: process.env.EMAIL_PASS,  // 授权码（从环境变量获取）
        },
    });

    // 邮件内容配置
    const mailOptions = {
        from: process.env.EMAIL_USER, // 发件人邮箱
        to: email, // 收件人邮箱
        subject: '政府房票', // 邮件主题
        text: `您的验证码是：${verificationCode}`, // 邮件内容
    };

    // 发送邮件
    try {
        await transporter.sendMail(mailOptions);
        return verificationCode; // 返回验证码
    } catch (err) {
        console.error('发送邮件失败:', err.message);  // 打印详细错误
        throw new Error('发送验证码失败');
    }
}

module.exports = {
    sendVerificationCode,
};
