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

module.exports = {tickets}
