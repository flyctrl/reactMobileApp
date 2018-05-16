import React, { Component } from 'react'
import style from './style.css'

class NewIcon extends Component {
  render() {
    console.log(style['default'])
    return <svg onClick={this.props.onClick} className={ this.props.className || style.default } aria-hidden='true'>
      <use xlinkHref={'#' + this.props.type}/>
    </svg>
  }
}

export default NewIcon
