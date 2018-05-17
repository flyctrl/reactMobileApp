import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import Header from 'Components/Header'
import NewIcon from 'Components/NewIcon'
import style from './style.css'

const tabs = [
  { title: '全部' },
  { title: '待确认' },
  { title: '待开工' },
  { title: '施工中' },
  { title: '待验收' }
]

class MyWorkList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actives: [
        { title: '查看详情', callBack: this.handleDetail },
        { title: '电话', icon: 'icon-phone', callBack: this.handleCall },
        { title: '聊天', icon: 'icon-message_pre', callBack: this.handleWeChat }
      ],
      data: []
    }
  }

  componentDidMount() {
    const data = Array.from(new Array(9)).map(() => ({
      title: '杭州莫干山工程',
      date: '4月1日-4月6日',
      day: '杭州莫干山工程',
      address: '杭州莫干山工程',
    }))
    this.setState({ data })
  }

  handleDetail = () => {
    this.props.match.history.push('/Home')
  }
  handleCall = () => {
    console.log('电话')
  }
  handleWeChat = () => {
    console.log('微信')
  }

  _getLists() {
    const { data, actives } = this.state
    return data.map((item, index) => <div className={style.item} key={index}>
      <div className={style.title}>{item.title}</div>
      <div className={style.desc}>
        <div className={style.date}>工期：{item.date}</div>
        <div className={style.day}>天数：{item.day}<a className={style.link} onClick={() => {
        }}>待确认</a></div>
        <div className={style.address}>施工地址：{item.address}<a className={style.link}>去这里</a><NewIcon
          className={style.icon} type='icon-goHere'/></div>
      </div>
      <div className={style.actives}>
        {actives.map((item, index) => <div onClick={item.callBack} key={index} className={style.active}>
          {item.icon && <NewIcon className={style.icon} type={item.icon}/>}<span className={style.title}>{item.title}</span>{index !== 2 && <i/>}
        </div>)}
      </div>
    </div>)
  }

  render() {
    console.log(this.props)
    return <div className={style['my-work-list']}>
      <Header
        title='我的工单'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.goBack()
        }}
      />
      <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
        <div>
          {this._getLists()}
        </div>
        <div>
          {this._getLists()}
        </div>
        <div>
          {this._getLists()}
        </div>
        <div>
          {this._getLists()}
        </div>
        <div>
          {this._getLists()}
        </div>
      </Tabs>
    </div>
  }
}

export default MyWorkList
