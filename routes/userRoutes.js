const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 登录接口
router.post('/login', userController.login);
// 发送验证码接口
router.post('/send-code', userController.sendVerificationCode);

module.exports = router;
