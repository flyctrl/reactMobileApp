/*
* @Author: chengbs
* @Date:   2018-04-08 16:18:37
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-25 17:52:01
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as urls from 'Contants/urls'
import { Grid, Flex } from 'antd-mobile'
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
        <Grid data={data} className='grid' columnNum={5} hasLine={false} activeStyle={false} renderItem={dataItem => (
          <div className='padd5'>
            <img src={dataItem.icon} className='dataItemImg' alt={dataItem.text} />
            <div className='dataItemText'>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
        />
        <div className='paddR10'><Flex justify='between' className='sub-title'>任务日历<Link style={{ color: '#0000ff' }} to={urls.TASKLIST}>切换列表</Link></Flex></div>
        <div className='padd10'>
          <dl>
            <dt><span>北京好望山一期</span><em>开工</em></dt>
            <dd><span className='prolist'>工期：3月20日-3月31日（共12 天）</span><span className='during'>开工中</span></dd>
            <dd><span className='auto'>计价模式：日结</span><span>工资：<em>300</em>元/天</span></dd>
            <dd><span className='auto'>联系人：李晓菲</span><a>聊天</a><a>电话</a></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default Workplat
