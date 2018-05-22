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
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {
            date: '2018年5月',
            id: 1,
            list: [
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
            ]
          },
          {
            date: '2018年4月',
            id: 2,
            list: [
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
            ]
          },
          {
            date: '2018年3月',
            id: 3,
            list: [
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
              { title: '个人', money: '100000', address: '杭州市西湖区莫干山项目' },
            ]
          }
        ]
      })
    })
  }

  render() {
    const { data } = this.state
    return <div className='pageBox'>
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
          <div className={style.header}>我的发票<NewIcon type='icon-calendar' className={style.date}/></div>
          {data.map((item, index) => <div key={index} className={style.item}>
            <div className={style.title}>{item.date}</div>
            {(item.list || []).map((list, index) => <div key={index} className={style.list} onClick={() => this.props.match.history.push(urls.INVOICEDETAIL + '?id=111')}>
              <div>发票抬头<span>{list.title}</span></div>
              <div>开票金额<span>{list.money}</span></div>
              <div>发票内容<span>{list.address}</span></div>
            </div>)}
          </div>)}
        </div>
      </Content>
    </div>
  }
}

export default Invoice
