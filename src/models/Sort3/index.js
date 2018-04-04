import React, { Component } from 'react'

class Sort3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
    console.log(props.match)
  }

  render() {
    return <div>我是分类3</div>
  }
}

export default Sort3
