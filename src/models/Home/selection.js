/*
* @Author: chengbs
* @Date:   2018-05-24 19:06:26
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-24 19:19:50
*/
import React, { Component } from 'react'
// import { Tag } from 'antd-mobile'
import { Header, Content } from 'Components'
import history from 'Util/history'
import * as urls from 'Contants/urls'
// import * as tooler from 'Contants/tooler'
// import style from './style.css'

class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onHandleReset = this.onHandleReset.bind(this)
  }
  onHandleReset() {
    console.log('重设')
  }
  render() {
    return (
      <div className='pageBox'>
        <Header
          leftClick1={() => {
            history.push(urls.HOME)
          }}
          title='筛选'
          leftIcon='icon-back'
          leftTitle1='返回'
          rightTitle='重设'
          rightClick={this.onHandleReset}
        />
        <Content>
          <div>赛选功能</div>
        </Content>
      </div>
    )
  }
}

export default Selection
