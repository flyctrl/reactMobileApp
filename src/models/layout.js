/*
* @Author: baosheng
* @Date:   2018-04-02 22:24:57
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-08 23:40:02
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
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <NavBar
          mode='dark'
          icon={
            history.location.pathname === '/Home' ? null : <Icon type='left' />
          }
          onLeftClick={() => {
            history.location.pathname === '/Home' ? null : this.goBack()
          }}
        >{ this.state.title || history.location.state.title }</NavBar>
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
