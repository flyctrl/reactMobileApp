/**
 * @Author: sunshiqiang
 * @Date: 2018-05-22 10:49:12
 * @Title: 申请发票
 */
import React, { Component } from 'react'
import {} from 'antd-mobile'
import * as urls from 'Contants/urls'
import { Header, Content, NewIcon } from 'Components'
import style from './style.css'

class Invoice extends Component {
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
        <div className={style.invoice}>
          <div className={style.header}>我的发票 <NewIcon type='icon-calendar' className={style.date}/> </div>
        </div>
      </Content>
    </div>
  }
}

export default Invoice
