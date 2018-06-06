import React, { Component } from 'react'
import { Tabs, SegmentedControl } from 'antd-mobile'
import { Header, Content, NewIcon, RefreshList } from 'Components'
import * as urls from 'Contants/urls'
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
      data: [],
    }
  }

  componentDidMount() {
    this.handleChange('', 0)
  }

  handleChange = (tab, index) => {
  }
  handleSegmentedChange = (value) => {
    console.log(value)
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

  async genData(status, value) {
    console.log(status, value)
    const dataArr = []
    for (let i = 0; i < 10; i++) {
      dataArr.push({
        title: '杭州莫干山工程',
        date: '4月1日-4月6日',
        day: '杭州莫干山工程',
        address: '杭州莫干山工程',
      })
    }
    return dataArr
  }

  render() {
    const { actives } = this.state
    const row = (rowData, sectionID, rowID) => {
      return (
        <div className={style.item} key={rowID}>
          <div className={style.title}>{rowData.title}-{rowID}</div>
          <div className={style.desc}>
            <div className={style.date} onClick={this.handleCall}>工期：{rowData.date}</div>
            <div className={style.day}>天数：{rowData.day}<span className={style.link} onClick={() => {
            }}>{rowData.title}</span></div>
            <div className={style.address}>施工地址：{rowData.address}<a className={style.link}>去这里</a><NewIcon
              className={style.icon} type='icon-goHere'/></div>
          </div>
          <div className={style.actives}>
            {actives.map((item, index) => <div onClick={rowData.callBack} key={index} className={style.active}>
              {rowData.icon && <NewIcon className={style.icon} type={rowData.icon}/>}<span className={style.title}>{rowData.title}</span>{index !== 2 && <i/>}
            </div>)}
          </div>
        </div>
      )
    }
    console.log(this.state.height)
    return <div className={`${style['my-work-list']} pageBox`}>
      <Header
        title='我的工单'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <SegmentedControl className={style.segmented} onValueChange={this.handleSegmentedChange} values={['我发布的', '我接单的']}/>
        <Tabs tabs={tabs} onChange={this.handleChange} swipeable={false}>
          <RefreshList row={row} genData={this.genData}/>
          <div>
            <RefreshList row={row} genData={this.genData}/>
          </div>
          <div>
            <RefreshList row={row} genData={this.genData}/>
          </div>
          <div>
            <RefreshList row={row} genData={this.genData}/>
          </div>
          <div>
            <RefreshList row={row} genData={this.genData}/>
          </div>
        </Tabs>
      </Content>
    </div>
  }
}

export default MyWorkList
