const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 模拟数据库数据
const tickets = [
    {
        id: 1,
        collectionUnit: '单位A',
        status: '未使用',
        amount: 100,
        validFrom: '2024-01-01',
        validTo: '2024-12-31'
    },
    {
        id: 2,
        collectionUnit: '单位B',
        status: '已使用',
        amount: 200,
        validFrom: '2024-02-01',
        validTo: '2024-11-30'
    }
];

// 获取所有房票数据
app.get('/api/ticket', (req, res) => {
    res.json(tickets);
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
