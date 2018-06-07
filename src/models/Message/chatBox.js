/*
* @Author: chengbs
* @Date:   2018-06-06 18:35:54
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-07 10:37:43
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, InputItem, Toast } from 'antd-mobile'
import { Header, Content } from 'Components'
// import NewIcon from 'Components/NewIcon'
import * as urls from 'Contants/urls'
import history from 'Util/history'
import style from './style.css'

class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meg: '',
      respon: [],
      megArray: []
    }
    this.handleData = this.handleData.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }
  componentDidMount() {

  }
  handleData(val) {
    this.setState({
      meg: val
    })
  }
  sendMessage(e) {
    e.preventDefault()
    const that = this
    let message = this.state.meg
    if (message === '') {
      Toast.info('不能发送空白消息哦', 1)
    } else {
      this.setState({
        megArray: [...this.state.megArray, message]
      })
      fetch('http://www.tuling123.com/openapi/api?key=84336120aa964b6e9f302791cf4a90f7&info=' + message, {
        method: 'POST',
        type: 'cors'
      }).then(function(response) {
        return response.json()
      }).then(function(detail) {
        return (that.setState({
          respon: [...that.state.respon, detail.text]
        }, () => {
          let el = ReactDOM.findDOMNode(that.refs.msgList)
          el.scrollTop = el.scrollHeight
        }))
      })
      this.state.meg = ''
    }
    return false
  }
  render() {
    let { meg, megArray, respon } = this.state
    return (
      <div className={`${style['chatBox']} pageBox`}>
        <Header
          className={style['chatbox-header']}
          leftClick1={() => {
            history.push(urls.MESSAGE)
          }}
          title='小明'
          leftIcon='icon-back'
          leftTitle1='返回'
          rightIcon='icon-morentouxiangicon'
        />
        <Content>
          <form className={style['chat-form']} onSubmit={ this.sendMessage }>
            <div className={style['content']}>
              <div className={style['msg-list']} ref='msgList'>
                {megArray.map((elem, index) => (
                  <div className={style['container']} key={index}>
                    <div className={style['message']}>{elem}</div>
                    <div className={style['response']}>{respon[index]}</div>
                  </div>)
                )}
              </div>
              <div className={`${style['fixedBottom']} my-top-border`}>
                <InputItem placeholder='快来和我聊聊天吧' className={`${style['send-input']}`} value={meg} onChange={this.handleData} />
                <Button type='primary' className={style['send-button']} onClick={this.sendMessage}>发送</Button>
              </div>
            </div>
          </form>
        </Content>
      </div>
    )
  }
}

export default ChatBox
