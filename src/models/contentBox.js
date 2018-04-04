/*
* @Author: baosheng
* @Date:   2018-04-03 16:32:29
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-03 16:43:46
*/
import React, { Component } from 'react'

class ContentBox extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <div style={{ backgroundColor: '#FFF', width: '100%', height: '100%', overflow: 'scroll', textAlign: 'center' }}>
        { this.props.content }
      </div>
    )
  }
}

export default ContentBox
