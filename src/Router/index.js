/*
* @Author: baosheng
* @Date:   2018-04-02 22:29:52
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-10 23:32:31
*/
import React from 'react'
import {
  Router,
  Switch
} from 'react-router-dom'
import * as urls from '../contants/urls'
import history from 'Util/history'
import XLayout from '../models/layout'
import Home from '../models/Home'
import Message from '../models/Message'
import Workplat from '../models/Workplat'
import Contact from '../models/Contact'
import Mine from '../models/Mine'
import Login from '../models/Login/login'
import Register from '../models/Login/register'
import ForgetPwd from '../models/Login/forgetPwd'
import TaskList from '../models/Workplat/taskList'

const routes = [
  {
    path: urls.MAIN,
    exact: true,
    component: Home,
    title: '首页'
  }, {
    path: urls.MESSAGE,
    exact: true,
    component: Message,
    title: '消息'
  }, {
    path: urls.WORKPLAT,
    exact: true,
    component: Workplat,
    title: '工作台'
  }, {
    path: urls.CONTACT,
    exact: true,
    component: Contact,
    title: '通讯录'
  }, {
    path: urls.MINE,
    exact: true,
    component: Mine,
    title: '我的'
  }, {
    path: urls.LOGIN,
    exact: true,
    component: Login,
    title: '登录'
  }, {
    path: urls.REGISTER,
    exact: true,
    component: Register,
    title: '注册'
  }, {
    path: urls.FORGETPWD,
    exact: true,
    component: ForgetPwd,
    title: '忘记密码'
  }, {
    path: urls.TASKLIST,
    exact: true,
    component: TaskList,
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
