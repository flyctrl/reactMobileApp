import React, { Component } from 'react'
import { NavBar, SearchBar } from 'antd-mobile'
import style from './style.css'
import { isIphoneX } from 'Util/ua'
import NewIcon from 'Components/NewIcon'
import classnames from 'classnames'

class Header extends Component {
  render() {
    const { title, titleClick, leftIcon, leftTitle1, leftClick1, leftClick2, leftTitle2, rightIcon, rightTitle, rightClick, searchTitle, onSearch, noLine } = this.props
    return <div className={classnames(style.header, this.props.className)}>
      {isIphoneX ? <div className={style['fix-iphoneX-top']}/> : null}
      <NavBar
        mode='light'
        className={style['nav-bar']}
        leftContent={[
          leftIcon && <span className='leftBox' key={1} ><NewIcon type={leftIcon} onClick={leftClick1} className='leftIcon' /></span>, leftTitle1 && <span key={2} className='usr-hdleft-title-first' onClick={leftClick1} >{leftTitle1}</span>, leftTitle2 && <span key={3} onClick={leftClick2} className='usr-hdleft-title-second'>{leftTitle2}</span>]}
        rightContent={[rightIcon && <span key={4} className='rightBox' ><NewIcon type={rightIcon} onClick={rightClick} className='rightIcon'/></span>, rightTitle && <span key={5} onClick={rightClick} className='usr-hdright-title'>{rightTitle}</span>]}
      >{searchTitle ? <SearchBar key={6} onSubmit={onSearch} className='search' placeholder={searchTitle} maxLength={8}/> : <span key={7} onClick={titleClick} className='title'>{title}
        </span>}</NavBar>
      { noLine ? null : <div style={{ backgroundColor: 'rgba(0,0,0,.09)', height: '1px' }}/> }
    </div>
  }
}

export default Header
