/*
* @Author: chengbs
* @Date:   2018-05-22 14:13:58
* @Last Modified by:   baosheng
* @Last Modified time: 2018-07-07 23:29:00
*/
import React from 'react'
import * as urls from 'Contants/urls'
import Loadable from 'react-loadable'

function MyLoadingComponent() {
  return <div></div>
}
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../models/Home'),
  loading: MyLoadingComponent
})
const Message = Loadable({
  loader: () => import(/* webpackChunkName: "message" */ '../models/Message'),
  loading: MyLoadingComponent
})
const PushOrder = Loadable({
  loader: () => import(/* webpackChunkName: "pushorder" */ '../models/PushOrder'),
  loading: MyLoadingComponent
})
const TobeDone = Loadable({
  loader: () => import(/* webpackChunkName: "tobedone" */ '../models/TobeDone'),
  loading: MyLoadingComponent
})

const Mine = Loadable({ // 我的
  loader: () => import(/* webpackChunkName: "mine" */ '../models/Mine'),
  loading: MyLoadingComponent
})
const SetUp = Loadable({ // 我的设置
  loader: () => import(/* webpackChunkName: "setup" */ '../models/Mine/SetUp'),
  loading: MyLoadingComponent
})
const SetUpSecurity = Loadable({ // 我的设置》账户与安全
  loader: () => import(/* webpackChunkName: "setupsecurity" */ '../models/Mine/SetUp/security'),
  loading: MyLoadingComponent
})

const PersonalData = Loadable({ // 个人资料编辑
  loader: () => import(/* webpackChunkName: "personaldata" */ '../models/Mine/PersonalData'),
  loading: MyLoadingComponent
})
const MyWorkList = Loadable({ // 我的工单
  loader: () => import(/* webpackChunkName: "myworklist" */ '../models/Mine/MyWorkList'),
  loading: MyLoadingComponent
})
const Authenticate = Loadable({ // 资格认证
  loader: () => import(/* webpackChunkName: "authenticate" */ '../models/Mine/Authenticate'),
  loading: MyLoadingComponent
})
const AuthenticatePersonal = Loadable({ // 资格认证》个人
  loader: () => import(/* webpackChunkName: "authenticatepersonal" */ '../models/Mine/Authenticate/personal'),
  loading: MyLoadingComponent
})
const AuthenticateCompany = Loadable({ // 资格认证》企业
  loader: () => import(/* webpackChunkName: "authenticatecompany" */ '../models/Mine/Authenticate/company'),
  loading: MyLoadingComponent
})
const Account = Loadable({ // 我的账户
  loader: () => import(/* webpackChunkName: "account" */ '../models/Mine/Account'),
  loading: MyLoadingComponent
})
const AccountDetail = Loadable({ // 我的账户》账户详情
  loader: () => import(/* webpackChunkName: "accountdetail" */ '../models/Mine/Account/detail'),
  loading: MyLoadingComponent
})
const AccountRecharge = Loadable({ // 我的账户》充值
  loader: () => import(/* webpackChunkName: "accountrecharge" */ '../models/Mine/Account/recharge'),
  loading: MyLoadingComponent
})
const AccountWithdrawCash = Loadable({ // 我的账户》提现
  loader: () => import(/* webpackChunkName: "accountwithdrawcash" */ '../models/Mine/Account/withdrawCash'),
  loading: MyLoadingComponent
})
const Invoice = Loadable({ // 申请发票
  loader: () => import(/* webpackChunkName: "invoice" */ '../models/Mine/Invoice'),
  loading: MyLoadingComponent
})
const InvoiceDetail = Loadable({ // 申请发票》详细
  loader: () => import(/* webpackChunkName: "invoicedetail" */ '../models/Mine/Invoice/detail'),
  loading: MyLoadingComponent
})
const Check = Loadable({ // 考勤管理
  loader: () => import(/* webpackChunkName: "check" */ '../models/Mine/Check'),
  loading: MyLoadingComponent
})

const Login = Loadable({ // 登录
  loader: () => import(/* webpackChunkName: "login" */ '../models/Login/login'),
  loading: MyLoadingComponent
})
const Register = Loadable({ // 注册
  loader: () => import(/* webpackChunkName: "register" */ '../models/Login/register'),
  loading: MyLoadingComponent
})
const ForgetPwd = Loadable({ // 忘记密码
  loader: () => import(/* webpackChunkName: "forgetpwd" */ '../models/Login/forgetPwd'),
  loading: MyLoadingComponent
})
const ResetPwd = Loadable({ // 重置密码
  loader: () => import(/* webpackChunkName: "resetpwd" */ '../models/Login/resetPwd'),
  loading: MyLoadingComponent
})

const SearchList = Loadable({ // 搜索页
  loader: () => import(/* webpackChunkName: "searchlist" */ '../models/Home/searchList'),
  loading: MyLoadingComponent
})
const Selection = Loadable({ // 筛选页
  loader: () => import(/* webpackChunkName: "selection" */ '../models/Home/selection'),
  loading: MyLoadingComponent
})
const WorkDetail = Loadable({ // 工作详情
  loader: () => import(/* webpackChunkName: "workdetail" */ '../models/Home/workDetail'),
  loading: MyLoadingComponent
})
const OrderDetail = Loadable({ // 订单详情
  loader: () => import(/* webpackChunkName: "orderdetail" */ '../models/Home/orderDetail'),
  loading: MyLoadingComponent
})

const SysNotice = Loadable({ // 系统通知
  loader: () => import(/* webpackChunkName: "sysnotice" */ '../models/Message/sysNotice'),
  loading: MyLoadingComponent
})
const ChatBox = Loadable({ // 聊天框
  loader: () => import(/* webpackChunkName: "chatbox" */ '../models/Message/chatBox'),
  loading: MyLoadingComponent
})
const UserInfo = Loadable({ // 用户信息
  loader: () => import(/* webpackChunkName: "userinfo" */ '../models/Message/userInfo'),
  loading: MyLoadingComponent
})

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    parent: null,
    showMenu: true,
    animated: false,
    title: '找工作'
  },
  {
    path: urls.HOME,
    exact: true,
    component: Home,
    parent: null,
    showMenu: true,
    animated: false,
    title: '找工作'
  }, {
    path: urls.TOBEDONE,
    exact: true,
    component: TobeDone,
    parent: null,
    animated: false,
    showMenu: true,
    title: '待办'
  }, {
    path: urls.PUSHORDER,
    exact: true,
    component: PushOrder,
    parent: null,
    showMenu: false,
    animated: false,
    title: '发布工单'
  }, {
    path: urls.MESSAGE,
    exact: true,
    component: Message,
    parent: null,
    animated: false,
    showMenu: true,
    title: '消息'
  }, {
    path: urls.MINE,
    exact: true,
    component: Mine,
    parent: null,
    animated: false,
    showMenu: true,
    title: '我的'
  }, {
    path: urls.SETUP,
    exact: true,
    component: SetUp,
    parent: null,
    animated: true,
    showMenu: false,
    title: '我的设置'
  }, {
    path: urls.SETUPSECURITY,
    exact: true,
    component: SetUpSecurity,
    parent: null,
    animated: true,
    showMenu: false,
    title: '账户与安全'
  }, {
    path: urls.PERSONALDATA,
    exact: true,
    component: PersonalData,
    parent: null,
    animated: true,
    showMenu: false,
    title: '个人资料编辑'
  }, {
    path: urls.MYWORKLIST,
    exact: true,
    component: MyWorkList,
    parent: 'Mine',
    animated: true,
    showMenu: false,
    title: '我的工单'
  }, {
    path: urls.AUTHENTICATE,
    exact: true,
    component: Authenticate,
    parent: true,
    animated: true,
    showMenu: false,
    title: '资格认证'
  }, {
    path: urls.AUTHENTICATEPERSONAL,
    exact: true,
    component: AuthenticatePersonal,
    parent: true,
    animated: true,
    showMenu: false,
    title: '个人资格认证'
  }, {
    path: urls.AUTHENTICATECOMPANY,
    exact: true,
    component: AuthenticateCompany,
    parent: true,
    animated: true,
    showMenu: false,
    title: '企业资格认证'
  }, {
    path: urls.ACCOUNT,
    exact: true,
    component: Account,
    parent: true,
    animated: true,
    showMenu: false,
    title: '我的账户'
  }, {
    path: urls.ACCOUNTDETAIL,
    exact: true,
    component: AccountDetail,
    parent: true,
    animated: true,
    showMenu: false,
    title: '账户详情'
  }, {
    path: urls.ACCOUNTRECHARGE,
    exact: true,
    component: AccountRecharge,
    parent: true,
    animated: true,
    showMenu: false,
    title: '充值'
  }, {
    path: urls.ACCOUNTWITHDRAWCASH,
    exact: true,
    component: AccountWithdrawCash,
    parent: true,
    animated: true,
    showMenu: false,
    title: '提现'
  }, {
    path: urls.INVOICE,
    exact: true,
    component: Invoice,
    parent: true,
    animated: true,
    showMenu: false,
    title: '申请发票'
  }, {
    path: urls.INVOICEDETAIL,
    exact: true,
    component: InvoiceDetail,
    parent: true,
    animated: true,
    showMenu: false,
    title: '申请发票详情'
  }, {
    path: urls.CHECK,
    exact: true,
    component: Check,
    parent: true,
    animated: true,
    showMenu: false,
    title: '考勤管理'
  }, {
    path: urls.LOGIN,
    exact: true,
    component: Login,
    parent: null,
    animated: false,
    showMenu: false,
    title: '登录'
  }, {
    path: urls.REGISTER,
    exact: true,
    component: Register,
    parent: null,
    animated: false,
    showMenu: false,
    title: '注册'
  }, {
    path: urls.FORGETPWD,
    exact: true,
    component: ForgetPwd,
    parent: null,
    animated: false,
    showMenu: false,
    title: '忘记密码'
  }, {
    path: urls.RESETPWD,
    exact: true,
    component: ResetPwd,
    parent: null,
    animated: false,
    showMenu: false,
    title: '重置密码'
  }, {
    path: urls.SEARCHLIST,
    exact: true,
    component: SearchList,
    parent: null,
    showMenu: false,
    animated: false,
    title: '搜索'
  }, {
    path: urls.SELECTION,
    exact: true,
    component: Selection,
    parent: null,
    showMenu: false,
    animated: false,
    title: '筛选'
  }, {
    path: urls.WORKDETAIL,
    exact: true,
    component: WorkDetail,
    parent: 'Home',
    showMenu: false,
    animated: true,
    title: '工作详情'
  }, {
    path: urls.ORDERDETAIL,
    exact: true,
    component: OrderDetail,
    parent: null,
    showMenu: false,
    animated: true,
    title: '工单详情'
  }, {
    path: urls.SYSNOTICE,
    exact: true,
    component: SysNotice,
    parent: 'Message',
    showMenu: false,
    animated: true,
    title: '系统通知'
  }, {
    path: urls.CHATBOX,
    exact: true,
    component: ChatBox,
    parent: 'Message',
    showMenu: false,
    animated: false,
    title: '聊天框'
  }, {
    path: urls.USERINFO,
    exact: true,
    component: UserInfo,
    parent: 'ChatBox',
    showMenu: false,
    animated: false,
    title: '用户信息'
  }
]

export default routes
