/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:55
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-16 13:14:13
*/
import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import Header from 'Components/Header'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}))
class Mine extends Component {
  test() {
    console.log('test')
  }
  settings = () => {
    console.log('设置')
  }
  render() {
    return (
      <div>
        <Header title='我的' rightIcon='icon-settings' rightClick={this.settings}/>
        <div style={{ color: '#888', fontSize: '14px', padding: '15px 0 9px 15px' }}>Always square grid item </div>
        <Grid data={data} activeStyle={false} />
      </div>
    )
  }
}

export default Mine
