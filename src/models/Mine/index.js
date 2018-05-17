/*
* @Author: chengbs
* @Date:   2018-04-08 16:19:55
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-16 13:14:13
*/
import React, { Component } from 'react'
import { Button, Icon, List } from 'antd-mobile'
import Header from 'Components/Header'
import NewIcon from 'Components/NewIcon'
import * as urls from 'Contants/urls'
import style from './style.css'

const Item = List.Item

class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {},
      linkData: [
        {
          icon: 'icon-myJob',
          title: '我的工单',
          link: urls.MYWORKLIST
        },
        {
          icon: 'icon-qualification',
          title: '资质认证',
          link: '/Home'
        },
        {
          icon: 'icon-myAccount',
          title: '我的帐户',
          link: '/Home'
        },
        {
          icon: 'icon-applicationForInvoi',
          title: '申请发票',
          link: '/Home'
        },
        {
          icon: 'icon-attendanceManagement',
          title: '考勤管理',
          link: '/Home'
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      userData: {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526533438825&di=b42ed5edc4abc41b39a33311e674f0d1&imgtype=0&src=http%3A%2F%2Fmp2.qiyipic.com%2Fimage%2F20180509%2Fb4%2Fc5%2Fppu_266729910102_pp_601_300_300.jpg',
        name: '宋雨琦',
        address: '浙江杭州',
        dataA: 100,
        dataB: 3000,
        dataC: 200
      }
    })
  }

  render() {
    const { userData, linkData } = this.state
    return (
      <div>
        <Header title='我的' rightIcon='icon-settings' rightClick={this.settings}/>
        <div className={style.header}>
          <div className={style.avatar}><img src={userData.avatar} alt='头像'/></div>
          <div className={style.describe}>
            <div className={style.name}>
              {userData.name}
            </div>
            <div className={style.address}>
              <NewIcon type='icon-address'/>
              <span className={style.title}>{userData.address}</span>
            </div>
            <Button className={style.btn} type='primary' size='small' inline><span><NewIcon
              type='icon-edit'/> 编辑资料</span></Button>
          </div>
        </div>
        <div className={style.data}>
          <div>
            <div className={style.num}>{userData.dataA}</div>
            <div className={style.desc}>近30天工单数</div>
          </div>
          <div>
            <div className={style.num}>{userData.dataB}</div>
            <div className={style.desc}>近30天收入</div>
          </div>
          <div>
            <div className={style.num}>{userData.dataC}</div>
            <div className={style.desc}>我关注的</div>
          </div>
        </div>
        <List className={style.link}>
          {linkData.map((item, index) => <Item key={index} onClick={() => {
            this.props.match.history.push(item.link)
          }}>
            <NewIcon type={item.icon}/>
            <span className={style.title}>{item.title}</span>
            <Icon className={style.rightIcon} type='right'/>
          </Item>)}
        </List>
      </div>
    )
  }
}

export default Mine
