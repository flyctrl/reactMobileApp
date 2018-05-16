/*
* @Author= chengbs
* @Date=   2018-04-08 13=57=21
* @Last Modified by=   chengbs
* @Last Modified time= 2018-05-16 14=40=01
*/
import React, { Component } from 'react'
import Header from 'Components/Header'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div><Header
      title='首页'
      leftIcon='icon-back'
      rightIcon=''
      rightTitle=''
    />
    </div>
  }
}

export default Home

