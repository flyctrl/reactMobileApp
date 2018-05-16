import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import style from './style.css'
import isIphoneX from 'Util/ua'
import NewIcon from 'Components/NewIcon'

class Header extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  componentDidMount() {
  }

  render() {
    const { title, titleClick, leftIcon, leftTitle1, leftClick1, leftClick2, leftTitle2, rightIcon, rightTitle, rightClick } = this.props
    return <div>
      {isIphoneX ? <div className={style['fix-iphoneX-top']}/> : null}
      <NavBar
        mode='light'
        leftContent={[
          leftIcon && <NewIcon key={1} type={leftIcon} onClick={leftClick1} />, leftTitle1 && <span key={2} style={{ paddingRight: '.5em' }} onClick={leftClick1} >{leftTitle1}</span>, leftTitle2 && <span key={3} onClick={leftClick2} >{leftTitle2}</span>]}
        rightContent={[rightIcon && <NewIcon key={4} type={rightIcon} onClick={rightClick}/>, rightTitle && <span key={5} onClick={rightClick}>{rightTitle}</span>]}
      ><span onClick={titleClick}>{title}
        </span></NavBar>
    </div>
  }
}

export default Header
