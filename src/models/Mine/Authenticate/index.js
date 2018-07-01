import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { Header, Content } from 'Components'
import * as urls from 'Contants/urls'
import style from './style.css'

class Authenticate extends Component {
  render() {
    return <div className={`${style.Authenticate} contentBox`}>
      <Header
        title='资格认证'
        leftIcon='icon-back'
        leftTitle1='我的'
        leftClick1={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <div className={style.Authenticate}>
          <Button className={style['link-personal']} onClick={() => this.props.match.history.push(urls.AUTHENTICATEPERSONAL)} type='ghost'>我是个人</Button>
          <Button className={style['link-company']} onClick={() => this.props.match.history.push(urls.AUTHENTICATECOMPANY)} type='primary'>我是企业</Button>
        </div>
      </Content>
    </div>
  }
}

export default Authenticate
