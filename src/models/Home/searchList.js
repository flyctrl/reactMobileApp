/*
* @Author: chengbs
* @Date:   2018-05-24 15:09:23
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-24 16:38:34
*/
import React, { Component } from 'react'
import { Tag, Toast } from 'antd-mobile'
import { Header, Content } from 'Components'
import style from './style.css'

class SearchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onSearch = this.onSearch.bind(this)
  }
  onSearch(str) {
    Toast.fail(str, 1000)
  }
  componentDidMount() {
    console.log(this.props)
    console.log(history)
  }
  render() {
    return (
      <div className='pageBox'>
        <Header
          className={style['search-list-header']}
          autoFocusInst={true}
          searchTitle='搜索工种/公司名称'
          onSearch={this.onSearch}
        />
        <Content>
          <p className={style['search-bd-title']}>热门搜索</p>
          <div className={style['search-bd-tags']}>
            <Tag data-seed='logId'>木工</Tag>
          </div>
        </Content>
      </div>
    )
  }
}

export default SearchList
