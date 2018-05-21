import React, { Component } from 'react'
import {} from 'antd-mobile'
import * as urls from 'Contants/urls'
import { Header, Content } from 'Components'
import style from './style.css'

class WithdrawCash extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return <div>
      <Header
        title='提现'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.ACCOUNT)
        }}
      />
      <Content>
        <div className={style['withdraw-cash']}></div>
      </Content>
    </div>
  }
}

export default WithdrawCash
