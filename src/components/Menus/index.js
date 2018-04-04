/*
* @Author: baosheng
* @Date:   2018-04-02 22:17:47
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-04 00:02:30
*/
import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import ContentBox from 'Models/contentBox'
import history from 'Util/history'
// import * as urls from '../../contants/url'
// import classNames from 'classnames'
// import Style from './style.css'
require('Src/assets/iconfont.js')

class AppMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab'
    }
  }

  render() {
    const pathname = history.location.pathname
    console.log(pathname)
    console.log(this.props.children)
    return (
      <div style={{ width: '100%', position: 'absolute', top: '45px', bottom: 0, left: 0, right: 0 }}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
        >
          <TabBar.Item
            title='首页'
            key='home'
            icon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-home'></use></svg>}
            selectedIcon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-home-on'></use></svg>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              })
              history.push('/Home')
              console.log('pathname', history.location.pathname)
            }}
            data-seed='logId'
          >
            { history.location.pathname === '/Home' ? this.props.children : null }
          </TabBar.Item>
          <TabBar.Item
            icon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-xiaoxi'></use></svg>}
            selectedIcon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-xiaoxi-on'></use></svg>}
            title='消息'
            key='message'
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              })
              history.push('/Sort1')
              console.log('pathname', history.location.pathname)
            }}
            data-seed='logId1'
          >
            { history.location.pathname === '/Sort1' ? this.props.children : null }
          </TabBar.Item>
          <TabBar.Item
            icon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-gongzuo'></use></svg>}
            selectedIcon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-gongzuo-on'></use></svg>}
            title='工作台'
            key='workpalt'
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              })
              history.push('/Sort2')
            }}
          >
            { pathname === '/Sort2' ? this.props.children : null }
          </TabBar.Item>
          <TabBar.Item
            icon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-tongxunlu'></use></svg>}
            selectedIcon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-tongxunlu-on'></use></svg>}
            title='通讯录'
            key='contact'
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              })
              history.push('/Sort3')
            }}
          >
            { pathname === '/Sort3' ? this.props : null }
          </TabBar.Item>
          <TabBar.Item
            icon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-wode'></use></svg>}
            selectedIcon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref='#icon-wode-on'></use></svg>}
            title='我的'
            key='my'
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'myTab',
              })
            }}
          >
            <ContentBox content='我的' />
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default AppMenu
