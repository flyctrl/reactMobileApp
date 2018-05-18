import React, { Component } from 'react'
import { isIphoneX } from 'Util/ua'
import style from './style.css'

class Content extends Component {
  render() {
    return <div className={isIphoneX ? style.marginTop83 : style.marginTop45}>
      {this.props.children}
    </div>
  }
}

export default Content
