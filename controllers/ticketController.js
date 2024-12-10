const {getTickets}=require('../services/ticketService');
async function loadTickets(req, res) {
    try { //从服务处获取数据
        const tickets = await getTickets();
        //返回给前端
        return res.status(200).json(tickets);
    } catch (e) {
        console.error('服务器错误,获取房票失败',e);
    }
}
module.exports={
    loadTickets
}