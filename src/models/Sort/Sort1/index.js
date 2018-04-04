import React, { Component } from 'react'

class Sort1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
    console.log(props.match)
  }

  render() {
    return <div>我是分类1</div>
  }
}

export default Sort1
