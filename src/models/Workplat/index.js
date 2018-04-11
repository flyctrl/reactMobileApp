/*
* @Author: chengbs
* @Date:   2018-04-08 16:18:37
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-11 14:36:52
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as urls from 'Contants/urls'
import './style.css'

class Workplat extends Component {
  render() {
    return (
      <div>
        <div className='sub-title'>任务日历  <Link to={urls.TASKLIST}>切换列表</Link></div>
      </div>
    )
  }
}

export default Workplat
