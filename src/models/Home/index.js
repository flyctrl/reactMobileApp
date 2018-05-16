/*
* @Author: chengbs
* @Date:   2018-04-08 13:57:21
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-16 14:40:01
*/
import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  render() {
    return <div>
      <svg aria-hidden='true'>
        <use xlinkHref='#icon-jobHunting'></use>
      </svg>
    </div>
  }
}

export default Home

