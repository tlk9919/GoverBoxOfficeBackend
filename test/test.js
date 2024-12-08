const express = require('express');
const { allHouses, filters } = require('../models/houseModel');  // 引入模型中的数据
const app = express();
const port = 5000;

// 获取房源详情的接口
app.get('/api/houseDetail/:id', (req, res) => {
    const houseId = parseInt(req.params.id);  // 获取URL中的房源ID
    const house = allHouses.find(h => h.id === houseId);  // 查找对应的房源

    if (house) {
        res.status(200).json(house);  // 返回房源详情数据
    } else {
        res.status(404).json({ message: '房源未找到' });  // 房源不存在时返回404错误
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});