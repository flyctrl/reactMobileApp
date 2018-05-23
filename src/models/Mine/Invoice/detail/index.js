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
import { getQueryString } from 'Contants/tooler'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: getQueryString('id'),
      data: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          title: '个人',
          target: '杭州市西湖区莫干山有限公司',
          money: '100,000',
          time: '2018-05-01 14:20:00',
          value: '杭州市西湖区莫干山项目'
        }
      })
    })
  }

  render() {
    const { id, data } = this.state
    console.log(id)
    return <div className='pageBox'>
      <Header
        title='申请发票'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.INVOICE)
        }}
      />
      <Content>
        <div className={style.detail}>
          <div className={style.info}>
            <div><span>发票抬头</span>{data.title}</div>
            <div><span>收款方</span>{data.target}</div>
            <div><span>发票金额</span>¥{data.money}</div>
            <div><span>开票时间</span>{data.time}</div>
            <div><span>开票内容</span>{data.value}</div>
          </div>
          <div className={style.active}>申请纸质发票</div>
        </div>
      </Content>
    </div>
  }
}

export default Detail
