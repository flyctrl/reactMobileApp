/*
* @Author: baosheng
* @Date:   2018-04-02 22:24:57
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-04 10:39:28
*/
import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
import AppMenu from 'Components/Menus'
import * as urls from '../contants/urls'
import Home from '../models/Home'
import Sort1 from '../models/Sort/Sort1'
import Sort2 from '../models/Sort/Sort2'
import Sort3 from '../models/Sort3'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // const { routes } = this.props
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
        <Route path='/' component= {AppMenu}>
          <Route path={urls.HOME} exact component={ Home }/>
          <Route path={urls.SORT1} exact component={ Sort1 }/>
          <Route path='/Sort2' exact component={ Sort2 }/>
          <Route path='/Sort3' exact component={ Sort3 }/>
        </Route>
      </div>
    )
  }
}

export default MainLayout
