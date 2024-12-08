const houseService = require("../services/houseService");
//获取房源
async function getHouses(req, res) {
    try { // 步骤 1: 获取前端传来的筛选条件
        const filtersQuery = req.query
        // 步骤 2: 调用房源服务层的 getHouses 方法
        // 将获取的筛选条件传递给服务层（houseService），并通过 await 等待结果
        const houses = await houseService.getAllHouses(filtersQuery);
        // 步骤 3: 返回成功响应
        return res.json({success: true, houses});
        // 步骤 4: 错误处理
    } catch (error) {
        console.error('获取房源失败:', error);
        return  res.status(500).json({ success: false, message: '获取房源失败' });
    }
}
//获取筛选条件
async function getFilters(req, res) {
    try { // 调用服务层的 getFilters 方法来获取可选的筛选条件
        const filters = await houseService.getFilters();
        // 步骤 2: 返回成功响应
        return res.json({success: true, filters});
        // 步骤 3: 错误处理
    } catch (e) {
        console.error('获取筛选条件失败',e)
        return res.status(500).json({sucess: false,message:'获取筛选条件失败'});
    }
}

module.exports = {
    getHouses,
    getFilters
}