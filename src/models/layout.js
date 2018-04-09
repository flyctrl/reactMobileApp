/*
* @Author: baosheng
* @Date:   2018-04-02 22:24:57
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-09 12:57:15
*/
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
import AppMenu from 'Components/Menus'
import history from 'Util/history'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      path: ''
    }
    this.goBack = this.goBack.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.location.state.title,
      path: nextProps.location.pathname
    })
  }
  componentWillMount() {
    if (history.location.pathname === '/') {
      this.setState({
        title: '首页',
        path: '/Home'
      })
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
    const { routes } = this.props
    const pathname = history.location.pathname
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <NavBar
          mode='dark'
          icon={
            (pathname === '/Home' || pathname === '/') ? null : <Icon type='left' />
          }
          onLeftClick={() => {
            (pathname === '/Home' || pathname === '/') ? null : this.goBack()
          }}
        >{ (history.location.state ? history.location.state.title : false) || this.state.title }</NavBar>
        <AppMenu onTouch={this.touchMenu.bind(this)} path={this.state.path} routes={routes}>
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
      </div>
    )
  }
}

export default MainLayout
