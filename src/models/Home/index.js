/*
* @Author= chengbs
* @Date=   2018-04-08 13=57=21
* @Last Modified by=   chengbs
* @Last Modified time= 2018-05-16 14=40=01
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ListView, PullToRefresh } from 'antd-mobile'
import { Header, Content } from 'Components'
import history from 'Util/history'
import * as urls from 'Contants/urls'
import * as tooler from 'Contants/tooler'
import style from './style.css'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
]
const NUM_ROWS = 10
let pageIndex = 0

function genData(pIndex = 0) {
  const dataArr = []
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`)
  }
  return dataArr
}

class Home extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      city: '杭州',
      dataSource,
      isLoading: true,
      refreshing: false,
      height: document.documentElement.clientHeight * 3 / 4,
    }
    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  searchOnFocus() {
    history.push(urls.SEARCHLIST)
  }

  rightClick() {
    history.push(urls.SELECTION)
  }

  componentDidMount() {
    console.log(decodeURI(tooler.parseURLParam()['name']))
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData()
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      })
    }, 1500)

    // Toast.info(history.state.state.logId, 100)
  }

  onEndReached(event) {
    console.log('onEndReached')
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

  onRefresh() {
    console.log('onRefresh')
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

  render() {
    const { city } = this.state

    let index = data.length - 1
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1
      }
      const obj = data[index--]
      return (
        <div key={rowID} className={style['job-list-box']}>
          <div style={{ display: 'flex', padding: '15px' }}>
            <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt='' />
            <div style={{ display: 'inline-block' }}>
              <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
              <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='contentBox'>
        <div className={style['usr-home-content']}>
          <Header
            className={style['home-header']}
            searchTitle='搜索工种/公司名称'
            cancelText={' '}
            onSearchFocus={this.searchOnFocus}
            leftIcon='icon-location'
            leftTitle1={city}
            rightTitle='筛选'
            rightClick={this.rightClick}
          />
          <Content>
            <ListView
              ref={(el) => { this.lv = el }}
              dataSource={this.state.dataSource}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? '加载中...' : '加载完成'}
              </div>)}
              renderRow={row}
              style={{
                height: this.state.height,
                overflow: 'auto',
              }}
              pageSize={5}
              onScroll={() => { console.log('scroll') }}
              pullToRefresh={<PullToRefresh
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />}
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />
          </Content>
        </div>
      </div>
    )
  }
}

export default Home

