const  userModel= require('../models/user');
const jwtUtils=require('../utils/jwtUtils');
//定义用户登录服务
async function loginUser(phone, verificationCode) {

    //调用模型层查询用户
    const users=await userModel.findUserByPhoneAndVerificationCode(phone, verificationCode);
    // 如果没有找到用户，抛出错误
    if (!users || !users.length) {
        throw new Error('手机号或验证码错误')
    }
    //获取第一个匹配的用户
    const user=users[0];
    //使用 JWT 工具生成 token
    const token=jwtUtils.generateToken(user.id,user.name);
    //返回登录成功的信息和用户数据
    return{
        message:'登录成功',
        user: { id: user.id, name: user.name, phone: user.phone },
        token:token,
    }

}