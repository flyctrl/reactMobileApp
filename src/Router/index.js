/*
* @Author: baosheng
* @Date:   2018-04-02 22:29:52
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-08 18:18:14
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

const routes = [
  {
    path: '/Home',
    key: 'Home',
    redirect: urls.HOME,
    exact: true,
    component: Home,
    icon: '#icon-home',
    onIcon: '#icon-home-on',
    title: '首页'
  }, {
    path: '/Message',
    key: 'Message',
    redirect: urls.MESSAGE,
    exact: true,
    component: Message,
    icon: '#icon-xiaoxi',
    onIcon: '#icon-xiaoxi-on',
    title: '消息'
  }, {
    path: '/Workplat',
    key: 'Workplat',
    redirect: urls.WORKPLAT,
    exact: true,
    component: Workplat,
    icon: '#icon-gongzuo',
    onIcon: '#icon-gongzuo-on',
    title: '工作台'
  }, {
    path: '/Contact',
    key: 'Contact',
    redirect: urls.CONTACT,
    exact: true,
    component: Contact,
    icon: '#icon-tongxunlu',
    onIcon: '#icon-tongxunlu-on',
    title: '通讯录'
  }, {
    path: '/Mine',
    key: 'Mine',
    redirect: urls.MINE,
    exact: true,
    component: Mine,
    icon: '#icon-wode',
    onIcon: '#icon-wode-on',
    title: '我的'
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
