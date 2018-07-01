/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:55
* @Last Modified by:   baosheng
* @Last Modified time: 2018-07-01 14:31:03
*/
import React, { Component } from 'react'
import { Button, Icon, List } from 'antd-mobile'
import { Header, Content, NewIcon } from 'Components'
import * as urls from 'Contants/urls'
import api from 'Util/api'
import style from './style.css'

const Item = List.Item
class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {
      },
      income: {
        dataA: 200,
        dataB: 3000,
        dataC: 100,
      },
      loading: true,
      linkData: [
        {
          icon: 'icon-myJob',
          title: '我的工单',
          link: urls.MYWORKLIST
        },
        {
          icon: 'icon-qualification',
          title: '资质认证',
          link: urls.AUTHENTICATE
        },
        {
          icon: 'icon-myAccount',
          title: '我的帐户',
          link: urls.ACCOUNT
        },
        {
          icon: 'icon-applicationForInvoi',
          title: '申请发票',
          link: urls.INVOICE
        },
        {
          icon: 'icon-attendanceManagement',
          title: '考勤管理',
          link: urls.CHECK + '?url=MINE'
        }
      ]
    }
  }

  componentDidMount() {
    (async () => {
      const userData = await api.Mine.Personaldara.info({ hasInfo: 1, time: Date.now() }) || {}
      this.setState({ loading: false, userData })
    })()
  }

  render() {
    const { userData, income, linkData, loading } = this.state
    userData.info = userData.info || {}
    return (
      <div className='contentBox'>
        <Header title='我的' rightIcon='icon-settings' rightClick={() => this.props.match.history.push(urls.SETUP)}/>
        <Content>
          <div className={`${style.header} ${loading ? style.loading : ''}`}>
            <div className={style.avatar}><span>{userData['small_avatar'] ? <img src={userData['small_avatar']} alt='头像'/> : <NewIcon className={style.icon} type='icon-morentouxiangicon'/>}</span></div>
            <div className={style.describe}>
              <div className={style.name}>
                {userData.username}
              </div>
              <div className={style.address}>
                <NewIcon type='icon-address'/>
                <span className={style.title}>{userData.info.address}</span>
              </div>
              <Button className={style.btn} onClick={() => this.props.match.history.push(urls.PERSONALDATA)} type='primary' size='small' inline><NewIcon
                type='icon-edit'/> 编辑资料</Button>
            </div>
          </div>
          <div className={`${style.data} ${loading ? style.loading : ''}`}>
            <div>
              <div className={style.num}>{income.dataA}</div>
              <div className={style.desc}>近30天工单数</div>
            </div>
            <div>
              <div className={style.num}>{income.dataB}</div>
              <div className={style.desc}>近30天收入</div>
            </div>
            <div>
              <div className={style.num}>{income.dataC}</div>
              <div className={style.desc}>我关注的</div>
            </div>
          </div>
          <List className={style.link}>
            {linkData.map((item, index) => <Item key={index} onClick={() =>
              this.props.match.history.push(item.link)}>
              <NewIcon type={item.icon}/>
              <span className={style.title}>{item.title}</span>
              <Icon className={style.rightIcon} type='right'/>
            </Item>)}
          </List>
        </Content>
      </div>
    )
  }
}

export default Mine
