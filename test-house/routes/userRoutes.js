const express = require('express');//引入 express 库
const userController = require('../controllers/userController');// 步骤2: 创建一个路由实例

// 登录接口
router.post('/login', userController.login);
// 发送验证码接口
router.post('/send-code', userController.sendVerificationCode);

module.exports = router;
