/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:55
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-16 13:14:13
*/
import React, { Component } from 'react'
import {} from 'antd-mobile'
import Header from 'Components/Header'
import style from './style.css'

class Mine extends Component {
  render() {
    return (
      <div>
        <Header title='我的' rightIcon='icon-settings' rightClick={this.settings}/>
        <div className={style.header}>
          <div className={style.avatar}><img src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526533438825&di=b42ed5edc4abc41b39a33311e674f0d1&imgtype=0&src=http%3A%2F%2Fmp2.qiyipic.com%2Fimage%2F20180509%2Fb4%2Fc5%2Fppu_266729910102_pp_601_300_300.jpg'} alt='头像'/></div>
          <div className={style.describe}></div>
        </div>
      </div>
    )
  }
}

export default Mine
