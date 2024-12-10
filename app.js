const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes'); // 引入用户路由
const houseRoutes = require('./routes/routes');
const ticketRoutes = require('./routes/routes');

require('dotenv').config();
const app = express();

// 使用中间件来解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 注册路由
app.use('/api/user', userRoutes);  // 用户相关路由
app.use('/api', houseRoutes);
app.use('/api/ticketDetail', ticketRoutes);

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`监听端口:${PORT}`);
});
