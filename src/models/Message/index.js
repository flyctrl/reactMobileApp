/*
* @Author: chengbs
* @Date:   2018-04-08 16:16:58
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-06 16:07:33
*/
import React, { Component } from 'react'
import { Header, Content } from 'Components'
import NewIcon from 'Components/NewIcon'
import style from './style.css'

class Message extends Component {
  render() {
    return (
      <div className='contentBox'>
        <Header title='消息'/>
        <Content>
          <div className={`${style['notice-box']} my-bottom-border`}>
            <dl>
              <dt>
                <span>
                  <NewIcon className={style['notice-icon']} type='icon-xiaolaba' />
                </span>
              </dt>
              <dd>
                <p>消息通知<em>下午4：20</em></p>
                <span>您直接在线接单就可以了。</span>
              </dd>
            </dl>
          </div>
        </Content>
      </div>
    )
  }
}

export default Message
