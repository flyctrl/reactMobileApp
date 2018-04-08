/*
* @Author: baosheng
* @Date:   2018-04-02 22:17:47
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-08 23:18:48
*/
import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import history from 'Util/history'
require('Src/assets/iconfont.js')

class AppMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: (history.location.pathname).slice(1) || 'Home'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedTab: (nextProps.path).slice(1)
    })
  }

  render() {
    const { routes } = this.props
    return (
      <div style={{ width: '100%', position: 'absolute', top: '45px', bottom: 0, left: 0, right: 0 }}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
        >
          {
            routes.map((item, index) => {
              return (
                <TabBar.Item
                  title={item['title']}
                  key={item['key']}
                  icon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref={item['icon']}></use></svg>}
                  selectedIcon={<svg className='icon-menu' aria-hidden='true'><use xlinkHref={item['onIcon']}></use></svg>}
                  selected={this.state.selectedTab === item['key']}
                  onPress={() => {
                    this.setState({
                      selectedTab: item['key'],
                    })
                    this.props.onTouch(item['title'])
                    history.push(item['path'], { title: item['title'] })
                  }}
                >
                  { history.location.pathname === item['path'] ? this.props.children : null }
                </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    )
  }
}

export default AppMenu
