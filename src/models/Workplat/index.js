/*
* @Author: chengbs
* @Date:   2018-04-08 16:18:37
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-10 16:19:59
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as urls from 'Contants/urls'
import { Grid } from 'antd-mobile'
import './style.css'

const data = [
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '项目管理'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '招标发包'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '发布工单'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '指派工单'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '记工记账'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '考勤管理'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '员工管理'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '开具发票'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '合同管理'
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: '结算管理'
  }
]
class Workplat extends Component {
  render() {
    return (
      <div>
        <div className='sub-title'>功能操作</div>
        <Grid data={data} itemStyle={{ height: '86px' }} columnNum={5} hasLine={false} activeStyle={false} renderItem={dataItem => (
          <div style={{ padding: '5px' }}>
            <img src={dataItem.icon} style={{ width: '30px', height: '30px' }} alt={dataItem.text} />
            <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
        />
        <div className='sub-title'>任务日历<Link to={urls.TASKLIST}>切换列表</Link></div>
      </div>
    )
  }
}

export default Workplat
