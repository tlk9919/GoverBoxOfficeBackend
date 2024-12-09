const {tickets}=require('../models/ticketModel');
//获取放票详情
async function getTicketsDetail(ticketId){
    //从model层获取数据
    //根据放票标识码显示具体房票
    try {
        const ticket = await tickets.find(t => {
            return t.id === ticketId
        })
        //返回数据
        //如果存在返回，不存在报错
        if(ticket){
            return ticket
        }
       else {
            console.log('查看房票详情失败');
        }
    } catch (e) {
        throw new Error('服务器错误，查看房票失败')
    }
}
//导出给其他模块使用
module.exports = {
    getTicketsDetail
}