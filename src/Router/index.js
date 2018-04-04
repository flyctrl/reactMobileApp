/*
* @Author: baosheng
* @Date:   2018-04-02 22:29:52
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-04 15:44:26
*/
import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import * as urls from '../contants/urls'
import XLayout from '../models/layout'
import Home from '../models/Home'
import Sort1 from '../models/Sort/Sort1'
import Sort2 from '../models/Sort/Sort2'
import Sort3 from '../models/Sort3'

const routes = [
  {
    path: '/Home',
    redirect: urls.HOME,
    exact: true,
    component: Home,
    breadcrumbName: '首页'
  }, {
    path: '/Sort1',
    redirect: urls.SORT1,
    exact: true,
    component: Sort1,
    breadcrumbName: '分类1'
  }, {
    path: '/Sort2',
    redirect: urls.SORT2,
    exact: true,
    component: Sort2,
    breadcrumbName: '分类2'
  }, {
    path: '/Sort3',
    redirect: urls.SORT3,
    exact: true,
    component: Sort3,
    breadcrumbName: '分类3'
  },
]

const RouteConfig = () => (
  <Router>
    <Switch>
      <XLayout routes={routes}>
      </XLayout>
    </Switch>
  </Router>
)

export default RouteConfig
