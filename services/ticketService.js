const {tickets}=require('../models/ticketModel');
//获取放票详情
 function getTickets() {
     try { //从model层获取数据
         const ticket = tickets;
         //获取成t
         return ticket;
     } catch (e) {
         console.error('从model层获取房票失败',e);
     }
 }
//导出给其他模块使用
module.exports = {
    getTickets
}