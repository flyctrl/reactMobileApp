import React, { Component } from 'react'
import { isIphoneX } from 'Util/ua'
import style from './style.css'
import history from 'Util/history'
import routes from 'Src/Router/routerConf'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '',
      isMenuPage: true,
      animated: false
    }
  }

  componentWillMount() {
    const rtObj = this.getRouteByPath()
    console.log(rtObj)
    this.setState({
      isMenuPage: rtObj['showMenu'],
      animated: rtObj['animated'],
      title: rtObj['title'],
      path: rtObj['path']
    })
  }
  getRouteByPath(pathname = history.location.pathname) {
    let routeObj = null
    routes.map((route, index) => {
      if (route['path'] === pathname) {
        routeObj = route
      }
    })
    return routeObj
  }
  render() {
    let animateClass = ''
    if (this.state.path === '/PushOrder') {
      animateClass = style['bounceInUp']
    } else if (this.state.isMenuPage && this.state.animated) {
      animateClass = style['bounceInRight']
    }
    return (
      <div className={`${isIphoneX ? style.marginTop83 : style.marginTop45} animated ${animateClass}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Content
