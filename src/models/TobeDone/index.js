/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:20
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-02 13:54:36
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Picker, List, PullToRefresh, ListView } from 'antd-mobile'
import { Header, Content } from 'Components'
import style from './style.css'
// import NewIcon from 'Components/NewIcon'

const date = new Date()
const data = [
  {
    title: '2018-04-08',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    title: '2018-06-02',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    title: '2018-06-02',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
]
const NUM_ROWS = 20
let pageIndex = 0

function genData(pIndex = 0) {
  const dataArr = []
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`)
  }
  return dataArr
}
class TobeDone extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      sValue: [date.getFullYear() + '年', date.getMonth() + '月'],
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight
    }
    this.setDateAry = this.setDateAry.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
  }

  componentDidUpdate() {
    document.body.style.overflow = 'hidden'
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop

    setTimeout(() => {
      this.rData = genData()
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      })
    }, 1500)
  }

  onRefresh() {
    this.setState({ refreshing: true, isLoading: true })
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData()
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      })
    }, 600)
  }

  onEndReached(event) {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return
    }
    console.log('reach end', event)
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)]
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      })
    }, 1000)
  }

  titleClick() {
    console.log('详情')
  }
  setDateAry() {
    let seasons = []
    let year = date.getFullYear()
    let yearAry = []
    let mouthAry = []
    for (let i = year - 10; i < year + 6; i++) {
      yearAry.push({ label: i + '年', value: i + '年' })
    }
    for (let j = 1; j < 13; j++) {
      mouthAry.push({ label: j + '月', value: j + '月' })
    }
    seasons = [yearAry, mouthAry]
    return seasons
  }
  render() {
    const seasons = this.setDateAry()
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    )
    let index = data.length - 1
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1
      }
      const obj = data[index--]
      return (
        <div key={rowID} className={style['tobe-list']}>
          <div className={`${style['tobe-list-title']} my-bottom-border`}>
            {obj.title}
          </div>
          <div className={style['tobe-list-body']}>
            <dl className='my-bottom-border'>
              <dt>
                <span className={`${style['checkItem']} my-full-border`}></span>
              </dt>
              <dd>
                <h4>需求跟进</h4>
                <p>浙江省西湖区莫干山路工程</p>
              </dd>
            </dl>
            <dl className='my-bottom-border'>
              <dt>
                <span className={`${style['checkItem']} my-full-border`}></span>
              </dt>
              <dd>
                <h4>需求跟进</h4>
                <p>浙江省西湖区莫干山路工程</p>
              </dd>
            </dl>
            <dl className={`${style['checked']} my-bottom-border`}>
              <dt>
                <span className={`${style['checkItem']} my-full-border`}></span>
              </dt>
              <dd>
                <h4>需求跟进</h4>
                <p>浙江省西湖区莫干山路工程</p>
              </dd>
            </dl>
          </div>
        </div>
      )
    }
    return (
      <div className='contentBox'>
        <Header className={style['tobe-done']} leftTitle2='考勤打卡' title={<div className={style['tobe-titile']}>
          <Picker
            data={seasons}
            title='选择日期'
            cascade={false}
            value={this.state.sValue}
            format={(labels) => { return labels.join('') }}
            onChange={v => this.setState({ sValue: v })}
            onOk={v => this.setState({ sValue: v })}
          >
            <List.Item arrow='down'></List.Item>
          </Picker>
        </div>}/>
        <Content>
          <ListView
            ref={(el) => { this.lv = el }}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div className={style['list-loading']}>
              {this.state.isLoading ? '加载中...' : '加载完成'}
            </div>)}
            renderRow={row}
            renderSeparator={separator}
            style={{
              height: this.state.height - 50
            }}
            pullToRefresh={<PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />}
            onEndReached={this.onEndReached}
            pageSize={5}
          />
        </Content>
      </div>
    )
  }
}

export default TobeDone
