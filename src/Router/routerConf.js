/*
* @Author: chengbs
* @Date:   2018-05-22 14:13:58
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-24 19:11:53
*/
import * as urls from 'Contants/urls'
import Home from '../models/Home'
import Message from '../models/Message'
import PushOrder from '../models/PushOrder'
import TobeDone from '../models/TobeDone'
// 我的
import Mine from '../models/Mine'
import MyWorkList from '../models/Mine/MyWorkList' // 我的工单
import Authenticate from '../models/Mine/Authenticate' // 资格认证
import Account from '../models/Mine/Account' // 我的账户
import AccountDetail from '../models/Mine/Account/detail' // 我的账户》账户详情
import AccountRecharge from '../models/Mine/Account/recharge' // 我的账户》充值
import AccountWithdrawCash from '../models/Mine/Account/withdrawCash' // 我的账户》提现
import Invoice from '../models/Mine/Invoice' // 申请发票
import InvoiceDetail from '../models/Mine/Invoice/detail' // 申请发票》详细
import Check from '../models/Mine/Check' // 考勤管理

import Login from '../models/Login/login' // 登录
import Register from '../models/Login/register' // 注册
import ForgetPwd from '../models/Login/forgetPwd' // 忘记密码
import ResetPwd from '../models/Login/resetPwd' // 重置密码

import SearchList from '../models/Home/searchList' // 搜索页
import Selection from '../models/Home/selection' // 筛选页

import TaskList from '../models/PushOrder/taskList'

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
    showMenu: true,
    animated: true,
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
    showMenu: true,
    title: '资格认证'
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
    path: urls.TASKLIST,
    exact: true,
    component: TaskList,
    parent: 'PushOrder',
    animated: true,
    showMenu: true,
    title: '任务列表'
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
  }
]

export default routes
