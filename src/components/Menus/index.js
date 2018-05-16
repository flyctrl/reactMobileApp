/*
* @Author: baosheng
* @Date:   2018-04-02 22:17:47
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-16 14:02:12
*/
import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import history from 'Util/history'
import * as urls from 'Contants/urls'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Container.css'
// import './Container.css'
import menuStyle from './style.css'
import { isIphoneX } from 'Util/ua'

const data = [
  {
    path: urls.HOME,
    key: 'Home',
    icon: '#icon-jobHunting',
    onIcon: '#icon-jobHunting_pre',
    title: '找工作'
  }, {
    path: urls.MESSAGE,
    key: 'Message',
    icon: '#icon-xiaoxi',
    onIcon: '#icon-xiaoxi-on',
    title: '待办'
  }, {
    path: urls.WORKPLAT,
    key: 'Workplat',
    icon: '#icon-gongzuo',
    onIcon: '#icon-gongzuo-on',
    title: '工作台'
  }, {
    path: urls.CONTACT,
    key: 'Contact',
    icon: '#icon-tongxunlu',
    onIcon: '#icon-tongxunlu-on',
    title: '通讯录'
  }, {
    path: urls.MINE,
    key: 'Mine',
    icon: '#icon-wode',
    onIcon: '#icon-wode-on',
    title: '我的'
  }
]
let menuAry = []

class AppMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: (history.location.pathname).slice(1) || 'Home'
    }
  }

  componentWillMount() {
    data.map((value, index, ary) => {
      menuAry.push(value['key'])
    })
    this.setState({
      selectedTab: (history.location.pathname).split('/')[1] || 'Home'
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedTab: nextProps.path !== '' ? (nextProps.path).split('/')[1] : 'Home'
    })
  }
  getComponentByUrl(url) {
    const childAry = this.props.children
    let newAry = []
    childAry.map((value) => {
      if (value.props.path === '/' && url === '/Home') {
        newAry.push(value)
      }
      if (value.props.path === url) {
        newAry.push(value)
      } else if (value.props.parent === (url.substr(0, 1) === '/' ? url.substr(1) : null)) {
        newAry.push(value)
      }
    })
    return newAry
  }

  render() {
    console.log(this.props)
    return (
      <div className={ isIphoneX ? menuStyle['tabBody-fix-iphoneX'] : (this.props.isHeader ? menuStyle['tabBody'] : menuStyle['noheadBody']) }>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
          noRenderContent={false}
        >
          {
            data.map((item, index) => {
              let componentAry = []
              componentAry = this.getComponentByUrl(item['path'])
              return (
                <TabBar.Item
                  title={item['title']}
                  className={menuStyle['touched']}
                  key={item['key']}
                  icon={<svg className={menuStyle['icon-menu']} aria-hidden='true'>
                    <use xlinkHref={item['icon']}></use>
                  </svg>}
                  selectedIcon={<svg className={menuStyle['icon-menu']} aria-hidden='true'>
                    <use xlinkHref={item['onIcon']}></use>
                  </svg>}
                  selected={this.state.selectedTab === (item['key'] || '/')}
                  onPress={() => {
                    this.setState({
                      selectedTab: item['key'],
                    })
                    this.props.onTouch(item['title'])
                    history.push(item['path'], { title: item['title'] })
                  }}
                >
                  {
                    componentAry.map((comp, i) => {
                      if (comp.props.parent !== null) {
                        return (
                          <div key={i}>
                            <ReactCSSTransitionGroup
                              component='div'
                              transitionName='transitionWrapper'
                              className='transitionWrapper'
                              transitionEnterTimeout={300}
                              transitionLeaveTimeout={300}>
                              <div key={ history.location.pathname } style={{ position: 'absolute', width: '100%' }}>
                                {
                                  comp
                                }
                              </div>
                            </ReactCSSTransitionGroup>
                          </div>
                        )
                      } else {
                        return (
                          <div key={ i }>
                            { comp }
                          </div>
                        )
                      }
                    })
                  }
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
