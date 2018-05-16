/*
* @Author: baosheng
* @Date:   2018-04-02 22:29:52
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-16 15:30:48
*/
import React from 'react'
import {
  Router,
  Switch
} from 'react-router-dom'
import * as urls from 'Contants/urls'
import history from 'Util/history'
import XLayout from '../models/layout'
import Home from '../models/Home'
import Message from '../models/Message'
import PushOrder from '../models/PushOrder'
import TobeDone from '../models/TobeDone'
import Mine from '../models/Mine'
import Login from '../models/Login/login'
import Register from '../models/Login/register'
import ForgetPwd from '../models/Login/forgetPwd'
import TaskList from '../models/Workplat/taskList'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    parent: null,
    isHeader: true,
    showBack: false,
    showMenu: true,
    title: '找工作'
  },
  {
    path: urls.HOME,
    exact: true,
    component: Home,
    parent: null,
    isHeader: true,
    showBack: false,
    showMenu: true,
    title: '找工作'
  }, {
    path: urls.TOBEDONE,
    exact: true,
    component: TobeDone,
    parent: null,
    showMenu: true,
    isHeader: true,
    showBack: true,
    title: '待办'
  }, {
    path: urls.PUSHORDER,
    exact: true,
    component: PushOrder,
    parent: null,
    isHeader: true,
    showBack: true,
    showMenu: true,
    title: '发布工单'
  }, {
    path: urls.MESSAGE,
    exact: true,
    component: Message,
    parent: null,
    isHeader: true,
    showBack: true,
    showMenu: true,
    title: '消息'
  }, {
    path: urls.MINE,
    exact: true,
    component: Mine,
    parent: null,
    isHeader: true,
    showBack: true,
    showMenu: true,
    title: '我的'
  }, {
    path: urls.LOGIN,
    exact: true,
    component: Login,
    parent: null,
    isHeader: true,
    showBack: false,
    showMenu: false,
    title: '登录'
  }, {
    path: urls.REGISTER,
    exact: true,
    component: Register,
    parent: null,
    isHeader: true,
    showBack: true,
    showMenu: false,
    title: '注册'
  }, {
    path: urls.FORGETPWD,
    exact: true,
    component: ForgetPwd,
    parent: null,
    isHeader: true,
    showBack: true,
    showMenu: false,
    title: '忘记密码'
  }, {
    path: urls.TASKLIST,
    exact: true,
    component: TaskList,
    parent: 'PushOrder',
    isHeader: true,
    showBack: true,
    showMenu: true,
    title: '任务列表'
  }
]

const RouteConfig = () => (
  <Router history={history}>
    <Switch>
      <XLayout routes={routes}>
      </XLayout>
    </Switch>
  </Router>
)

export default RouteConfig
