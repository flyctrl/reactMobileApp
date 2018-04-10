/*
* @Author: baosheng
* @Date:   2018-04-02 22:29:52
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-09 15:45:31
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

const routes = [
  {
    path: '/Home',
    redirect: urls.HOME,
    exact: true,
    component: Home,
    title: '首页'
  }, {
    path: '/Message',
    redirect: urls.MESSAGE,
    exact: true,
    component: Message,
    title: '消息'
  }, {
    path: '/Workplat',
    redirect: urls.WORKPLAT,
    exact: true,
    component: Workplat,
    title: '工作台'
  }, {
    path: '/Contact',
    redirect: urls.CONTACT,
    exact: true,
    component: Contact,
    title: '通讯录'
  }, {
    path: '/Mine',
    redirect: urls.MINE,
    exact: true,
    component: Mine,
    title: '我的'
  }, {
    path: '/Login/login',
    redirect: urls.LOGIN,
    exact: true,
    component: Login,
    title: '登录'
  }, {
    path: '/Login/register',
    redirect: urls.REGISTER,
    exact: true,
    component: Register,
    title: '注册'
  }, {
    path: '/Login/forgetPwd',
    redirect: urls.FORGETPWD,
    exact: true,
    component: ForgetPwd,
    title: '忘记密码'
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
