/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:20
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-22 11:30:57
*/
import React, { Component } from 'react'
import Header from 'Components/Header'

class TobeDone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '2018 5月'
    }
  }
  detail = () => {
    console.log('详情')
  }
  render() {
    const { date } = this.state
    return <div className='contentBox'>
      <Header leftTitle2={date} rightTitle='查看详情' rightClick={this.detail}/>
    </div>
  }
}

export default TobeDone
