/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:55
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-29 15:34:07
*/
import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}))
class Mine extends Component {
  render() {
    return (
      <div>
        <div style={{ color: '#888', fontSize: '14px', padding: '15px 0 9px 15px' }}>Always square grid item </div>
        <Grid data={data} activeStyle={false} />
      </div>
    )
  }
}

export default Mine
