/*
* @Author: baosheng
* @Date:   2018-04-02 22:24:57
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-04 15:28:19
*/
import React, { Component } from 'react'
import {
  Route,
  BrowserRouter
} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
import AppMenu from 'Components/Menus'
// import * as urls from '../contants/urls'
// import Home from 'Models/Home'
// import Sort1 from 'Models/Sort/Sort1'
// import Sort2 from 'Models/Sort/Sort2'
// import Sort3 from 'Models/Sort3'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { routes } = this.props
    // const { routes } = this.props
    console.log(this.props)
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <NavBar
          mode='dark'
          icon={<Icon type='left' />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
            <Icon key='1' type='ellipsis' />,
          ]}
        >金诚</NavBar>
        <BrowserRouter>
          <AppMenu>
            {
              routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(match) => {
                      <div>
                        <route.component match={match}/>
                      </div>
                    }}
                  />
                )
              })
            }
          </AppMenu>
        </BrowserRouter>
      </div>
    )
  }
}

export default MainLayout
