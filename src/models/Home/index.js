/*
* @Author= chengbs
* @Date=   2018-04-08 13=57=21
* @Last Modified by=   chengbs
* @Last Modified time= 2018-05-16 14=40=01
*/
import React, { Component } from 'react'
import { Header, Content } from 'Components'
import history from 'Util/history'
import * as urls from 'Contants/urls'
import style from './style.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '杭州'
    }
  }
  searchOnFocus() {
    history.push(urls.SEARCHLIST, { logId: 100 })
  }

  render() {
    const { city } = this.state
    return <div className={style['usr-home-content']}>
      <Header
        className={style['home-header']}
        searchTitle='搜索工种/公司名称'
        cancelText={' '}
        onSearchFocus={this.searchOnFocus}
        leftIcon='icon-location'
        leftTitle1={city}
        rightTitle='筛选'
      />
      <Content>
        找工作
      </Content>
    </div>
  }
}

export default Home

