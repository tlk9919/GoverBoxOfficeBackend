const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: '126',
    auth: {
        user: 'gover_ticket@126.com',  // 替换成你的邮箱
        pass: 'JQxepQuAN2Nad5Am',      // 替换成你的授权码
    },
});

const mailOptions = {
    from: 'gover_ticket@126.com',
    to: '991988677@qq.com',  // 收件人邮箱
    subject: '测试邮件',
    text: '这是一封测试邮件。',
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error('邮件发送失败:', err);
    } else {
        console.log('邮件发送成功:', info);
    }
});
