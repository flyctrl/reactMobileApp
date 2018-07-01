import React, { Component } from 'react'
import { Tabs, SegmentedControl } from 'antd-mobile'
import { Header, Content, NewIcon, RefreshList } from 'Components'
import * as urls from 'Contants/urls'
import { addCommas } from 'Contants/tooler'
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
      loading: true,
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

  genData = async (status, value) => {
    console.log(status, value)
    function timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
      })
    }

    const data = await timeout(1000).then((value) => {
      const dataArr = []
      for (let i = 0; i < 10; i++) {
        dataArr.push({
          title: '杭州莫干山工程',
          date: '4月1日-4月6日',
          day: '6',
          address: '杭州莫干山工程',
          code: '123123',
          money: '500000',
          status: '待确认'
        })
      }
      return dataArr
    })
    this.setState({
      loading: false,
    })
    return data
  }

  render() {
    const { loading } = this.state
    console.log(loading)
    const row = (rowData, sectionID, rowID) => {
      return (
        <div className={`${style.item} ${loading ? style.loading : ''}`} onClick={() => {
          this.props.match.history.push(urls.ORDERDETAIL + '?url=MYWORKLIST')
        }} key={rowID}>
          <div className={style.title}><span className={style.left}>{rowData.title}</span><span className={style.right}>{rowData.status}</span></div>
          <div className={style.desc}>
            <div onClick={this.handleCall}>工期：{rowData.date}</div>
            <div>天数：{rowData.day}</div>
            <div className={style.address}>施工地址：{rowData.address}<a className={style.link}>去这里</a><NewIcon
              className={style.icon} type='icon-goHere'/></div>
            <div>工单号：{rowData.code}</div>
          </div>
          <div className={style.money}><span>快单：¥{addCommas(rowData.money)}</span></div>
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
