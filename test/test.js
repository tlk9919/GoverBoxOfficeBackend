const express = require('express');
const cors = require('cors');
const app = express();

// 启用 CORS 以允许前端与后端进行跨域请求
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 模拟房源数据（根据不同的筛选条件进行合理分配）
const allHouses = [
    { id: 1, name: '万科金域南湾二期项目', address: '天河区珠吉街道黄埔大道第758号', area: '天河区', areaRange: '45-109m²', houseType: '二室', price: '150-250万', count: 50, priceRange: '150万-250万', imageUrl: '/assets/images/index/house1.png' },
    { id: 2, name: '万科金域南湾三期项目', address: '天河区珠吉街道黄埔大道第758号', area: '天河区', areaRange: '60-120m²', houseType: '三室', price: '250-350万', count: 30, priceRange: '250万-350万', imageUrl: '/assets/images/index/house2.png' },
    { id: 3, name: '绿地中央公馆', address: '天河区珠吉街道黄埔大道第758号', area: '珠吉街道', areaRange: '50-80m²', houseType: '一室', price: '200-300万', count: 20, priceRange: '200万-300万', imageUrl: '/assets/images/index/house3.png' },
    { id: 4, name: '恒大天汇', address: '珠吉街道黄埔大道', area: '珠吉街道', areaRange: '60-120m²', houseType: '二室', price: '180-250万', count: 40, priceRange: '180万-250万', imageUrl: '/assets/images/index/house1.png' },
    { id: 5, name: '绿地未来城', address: '天河区', area: '天河区', areaRange: '45-109m²', houseType: '三室', price: '230-300万', count: 35, priceRange: '230万-300万', imageUrl: '/assets/images/index/house2.png' },
    { id: 6, name: '保利天汇', address: '天河区', area: '天河区', areaRange: '60-120m²', houseType: '二室', price: '250-350万', count: 25, priceRange: '250万-350万', imageUrl: '/assets/images/index/house3.png' },
    { id: 7, name: '金茂府', address: '珠吉街道', area: '珠吉街道', areaRange: '50-80m²', houseType: '一室', price: '170-250万', count: 60, priceRange: '170万-250万', imageUrl: '/assets/images/index/house1.png' },
    { id: 8, name: '中海锦绣', address: '天河区珠吉街道', area: '天河区', areaRange: '45-109m²', houseType: '二室', price: '200-300万', count: 45, priceRange: '200万-300万', imageUrl: '/assets/images/index/house3.png' }
];


// 获取筛选条件
const filters = {
    areas: ['天河区', '珠吉街道'],  // 区域数据
    areaRanges: ['45-109m²', '60-120m²', '50-80m²'],  // 面积范围数据
    houseTypes: ['一室', '二室', '三室'],  // 户型数据
    prices: ['150-250万', '200-300万', '250-350万']  // 总价数据
};

// 获取房源数据并支持筛选
app.get('/api/houses', (req, res) => {
    const { area, areaRange, houseType, price } = req.query;

    // 打印前端传来的筛选条件
    console.log('前端传来的筛选条件:', { area, areaRange, houseType, price });

    let filteredHouses = allHouses;

    // 根据筛选条件进行过滤
    if (area) {
        filteredHouses = filteredHouses.filter(house => house.area === area);
    }
    if (areaRange) {
        filteredHouses = filteredHouses.filter(house => house.areaRange === areaRange);
    }
    if (houseType) {
        filteredHouses = filteredHouses.filter(house => house.houseType === houseType);
    }
    if (price) {
        filteredHouses = filteredHouses.filter(house => house.price === price);
    }

    // 返回筛选后的房源数据
    res.json({ success: true, houses: filteredHouses });
});

// 获取筛选条件数据
app.get('/api/filters', (req, res) => {
    // 返回筛选条件数据
    res.json({ success: true, filters });
});

// 启动服务器
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
