const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const houseController = require("../controllers/houseController");
const ticketController = require("../controllers/ticketController");
// 登录接口
router.post('/login', userController.login);
// 发送验证码接口
router.post('/send-code', userController.sendVerificationCode);
//获取房源详情
router.get('/houses', houseController.getHouses);
// 获取筛选条件数据
router.get('/filters', houseController.getFilters);
//获取房源详情
router.get('/houseDetail/:id', houseController.getHouseDetail)
//获取房票
router.get('/ticket',ticketController.loadTickets)
//获取房票详情
router.get('/:id',ticketController.loadTicketDetails)
module.exports = router;
