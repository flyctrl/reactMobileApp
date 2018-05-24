/*
* @Author: chengbs
* @Date:   2018-05-24 15:09:23
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-24 19:00:23
*/
import React, { Component } from 'react'
// import { Tag } from 'antd-mobile'
import { Header, Content } from 'Components'
import history from 'Util/history'
import * as urls from 'Contants/urls'
import * as tooler from 'Contants/tooler'
import style from './style.css'

class SearchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.onClickTag = this.onClickTag.bind(this)
  }
  onSearchSubmit(str) {
    let testJson = { name: str }
    history.push(urls.HOME + '?' + tooler.parseJsonUrl(testJson))
  }
  onSearchCancel() {
    history.push(urls.HOME, { logId: 200 })
  }
  onClickTag(val) {
    console.log(val)
    let testJson = { name: val }
    history.push(urls.HOME + '?' + tooler.parseJsonUrl(testJson))
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className='pageBox'>
        <Header
          className={style['search-list-header']}
          autoFocusInst={true}
          searchTitle='搜索工种/公司名称'
          onSearchSubmit={this.onSearchSubmit}
          onSearchCancel={this.onSearchCancel}
        />
        <Content>
          <p className={style['search-bd-title']}>热门搜索</p>
          <ul className={style['search-bd-tags']}>
            <li onClick={this.onClickTag.bind(this, '木工')}>木工</li>
            <li onClick={this.onClickTag.bind(this, '木wew问问我若e工')}>木wew问问我若e工</li>
            <li onClick={this.onClickTag.bind(this, '喂喂喂潍坊人')}>喂喂喂潍坊人</li>
          </ul>
        </Content>
      </div>
    )
  }
}

export default SearchList
