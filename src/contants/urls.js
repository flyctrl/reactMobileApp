/*
* @Author: baosheng
* @Date:   2018-04-02 22:21:55
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-07 11:02:09
*/
const BASE_URL = ``

export const HOME = `${BASE_URL}/Home`
export const MESSAGE = `${BASE_URL}/Message`
export const PUSHORDER = `${BASE_URL}/PushOrder` // 发布工单
export const TOBEDONE = `${BASE_URL}/TobeDone`
// 我的
export const MINE = `${BASE_URL}/Mine`
export const SETUP = `${MINE}/SetUp` // 我的设置
export const SETUPSECURITY = `${SETUP}/security` // 我的设置》账户与安全
export const PERSONALDATA = `${MINE}/PersonalData` // 个人资料编辑
export const MYWORKLIST = `${MINE}/MyWorkList` // 我的工单
export const AUTHENTICATE = `${MINE}/Authenticate` // 资格认证
export const AUTHENTICATEPERSONAL = `${AUTHENTICATE}/personal` // 资格认证》个人
export const AUTHENTICATECOMPANY = `${AUTHENTICATE}/company` // 资格认证》企业
export const ACCOUNT = `${MINE}/Account` // 我的账户
export const ACCOUNTRECHARGE = `${ACCOUNT}/recharge` // 我的账户》充值
export const ACCOUNTWITHDRAWCASH = `${ACCOUNT}/withdrawCash` // 我的账户》提现
export const ACCOUNTDETAIL = `${ACCOUNT}/detail` // 我的账户》账户详细
export const INVOICE = `${MINE}/Invoice` // 申请发票
export const INVOICEDETAIL = `${INVOICE}/detail` // 申请发票》详细
export const CHECK = `${MINE}/Check` // 考勤管理

export const LOGIN = `${BASE_URL}/Login/login` // 登录
export const REGISTER = `${BASE_URL}/Login/register` // 注册
export const FORGETPWD = `${BASE_URL}/Login/forgetPwd` // 忘记密码
export const RESETPWD = `${BASE_URL}/Login/resetPwd` // 重置密码

export const SEARCHLIST = `${BASE_URL}/Home/searchList` // 搜索页
export const SELECTION = `${BASE_URL}/Home/selection` // 筛选页

// 工单相关
export const WORKDETAIL = `${BASE_URL}/Home/workDetail` // 工作详情
export const ORDERDETAIL = `${BASE_URL}/Home/orderDetail` // 工单详情

export const SYSNOTICE = `${BASE_URL}/Message/sysNotice` // 系统通知
export const CHATBOX = `${BASE_URL}/Message/chatBox` // 聊天框
export const USERINFO = `${BASE_URL}/Message/userInfo` // 用户信息

