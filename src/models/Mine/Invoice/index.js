/**
 * @Author: sunshiqiang
 * @Date: 2018-05-22 10:49:12
 * @Title: 申请发票
 */
import React, { Component } from 'react'
import {} from 'antd-mobile'
import * as urls from 'Contants/urls'
import { Header, Content } from 'Components'
import { addCommas } from 'Contants/tooler'
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
            list: [
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', id: 1, time: '5月1日-5月6日（6天）' },
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', id: 2, time: '5月1日-5月6日（6天）' },
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', id: 3, time: '5月1日-5月6日（6天）' },
            ]
          },
          {
            date: '2018年4月',
            id: 2,
            list: [
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', time: '5月1日-5月6日（6天）' },
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', time: '5月1日-5月6日（6天）' },
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', time: '5月1日-5月6日（6天）' },
            ]
          },
          {
            date: '2018年3月',
            id: 3,
            list: [
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', time: '5月1日-5月6日（6天）' },
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', time: '5月1日-5月6日（6天）' },
              { title: '江西景德镇一期', money: '100000', value: '上门给客户做家具安装，前期有培训，不拖欠工资，包住宿，有老师傅带，收入稳定。', time: '5月1日-5月6日（6天）' },
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
        leftTitle1='我的'
        leftClick1={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <div className={style.invoice}>
          <div className={style.header}>我的发票</div>
          {data.map((item, index) => <div key={index} className={style.item}>
            <div className={style.title}>{item.date}</div>
            {(item.list || []).map((list, index) => <div key={index} className={style.list} onClick={() => this.props.match.history.push(urls.INVOICEDETAIL + `?id=${list.id}`)}>
              <div><div className={style.left}>项目名称</div><div className={style.right}>{list.title}</div></div>
              <div><div className={style.left}>竣工时间</div><div className={style.right}>{list.time}</div></div>
              <div><div className={style.left}>工作内容</div><div className={style.right}>{list.value}<div className={style.money}>¥{addCommas(list.money)}</div></div></div>
            </div>)}
          </div>)}
        </div>
      </Content>
    </div>
  }
}

export default Invoice
