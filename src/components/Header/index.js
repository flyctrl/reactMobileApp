import React, { Component } from 'react'
import { NavBar, SearchBar } from 'antd-mobile'
import style from './style.css'
import { isIphoneX } from 'Util/ua'
import NewIcon from 'Components/NewIcon'

class Header extends Component {
  render() {
    const { title, titleClick, leftIcon, leftTitle1, leftClick1, leftClick2, leftTitle2, rightIcon, rightTitle, rightClick, searchTitle, onSearch, noLine } = this.props
    return <div className={style.header}>
      {isIphoneX ? <div className={style['fix-iphoneX-top']}/> : null}
      <NavBar
        mode='light'
        leftContent={[
          leftIcon && <span className={style.box} ><NewIcon key={1} type={leftIcon} onClick={leftClick1} className={style.leftIcon} /></span>, leftTitle1 && <span key={2} className={style['usr-hdleft-title-first']} onClick={leftClick1} >{leftTitle1}</span>, leftTitle2 && <span key={3} onClick={leftClick2} className={style['usr-hdleft-title-second']}>{leftTitle2}</span>]}
        rightContent={[rightIcon && <span className={style.box} ><NewIcon key={4} type={rightIcon} onClick={rightClick} className={style.rightIcon} /></span>, rightTitle && <span key={5} onClick={rightClick} className={style['usr-hdright-title']}>{rightTitle}</span>]}
      >{searchTitle ? <SearchBar onSubmit={onSearch} className={style.search} placeholder={searchTitle} maxLength={8}/> : <span onClick={titleClick} className={style.title}>{title}
        </span>}</NavBar>
      { noLine ? null : <div style={{ backgroundColor: 'rgba(0,0,0,.09)', height: '1px' }}/> }
    </div>
  }
}

export default Header
