/**
 * @Author: sunshiqiang
 * @Date: 2018-05-22 10:52:31
 * @Title: 发票详情
 */
import React, { Component } from 'react'
import {} from 'antd-mobile'
import * as urls from 'Contants/urls'
import { Header, Content } from 'Components'
import style from './style.css'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return <div>
      <Header
        title='申请发票'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <div className={style.detail}></div>
      </Content>
    </div>
  }
}

export default Detail
