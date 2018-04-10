/*
* @Author: baosheng
* @Date:   2018-04-02 22:24:57
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-09 15:48:37
*/
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
import AppMenu from 'Components/Menus'
import history from 'Util/history'

const titleAry = {
  'login': '登录',
  'register': '注册',
  'forgetPwd': '忘记密码'
}
class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      path: '',
      isMenuPage: true
    }
    this.goBack = this.goBack.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.location.state.title,
      path: nextProps.location.pathname
    })
  }
  componentWillMount() {
    const pathname = history.location.pathname
    const pathStr1 = pathname.split('/')[1]
    const pathStr2 = pathname.split('/')[2]
    if (pathname === '/') {
      this.setState({
        title: '首页',
        path: '/Home'
      })
    } else if (pathStr1 === 'Login') {
      this.setState({
        isMenuPage: false,
        title: titleAry[pathStr2]
      })
    }
  }
  showMenu() {
    const { routes } = this.props
    console.log(this.state.isMenuPage)
    if (this.state.isMenuPage) {
      return (
        <AppMenu onTouch={this.touchMenu.bind(this)} path={this.state.path}>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(match) => {
                    return (
                      <div>
                        <route.component match={match}/>
                      </div>
                    )
                  }}
                />
              )
            })
          }
        </AppMenu>
      )
    } else {
      return (
        <div>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(match) => {
                    return (
                      <div>
                        <route.component match={match}/>
                      </div>
                    )
                  }}
                />
              )
            })
          }
        </div>
      )
    }
  }
  touchMenu(event) {
    this.setState({
      title: event
    })
  }
  goBack() {
    history.goBack()
  }
  render() {
    const pathname = history.location.pathname
    const pathBool = (pathname === '/Home' || pathname === '/' || pathname.split('/')[2] === 'login')
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <NavBar
          mode='dark'
          icon={
            pathBool ? null : <Icon type='left' />
          }
          onLeftClick={() => {
            pathBool ? null : this.goBack()
          }}
        >{ (history.location.state ? history.location.state.title : false) || this.state.title }</NavBar>
        {this.showMenu()}
      </div>
    )
  }
}

export default MainLayout
