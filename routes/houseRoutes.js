// routes/houseRoutes.js
const express = require('express');
const router = express.Router();
const houseController = require('../controllers/houseController');  // 引入 houseController 控制器

// 获取房源数据
router.get('/houses', houseController.getHouses);

// 获取筛选条件数据
router.get('/filters', houseController.getFilters);

module.exports = router;
