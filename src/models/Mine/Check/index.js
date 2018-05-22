/**
 * @Author: sunshiqiang
 * @Date: 2018-05-22 18:16:38
 * @Title: 考勤管理
 */
import React, { Component } from 'react'
import { List, Steps, Button } from 'antd-mobile'
import * as urls from 'Contants/urls'
import { Header, Content } from 'Components'
import style from './style.css'

const Item = List.Item
const Brief = Item.Brief
const Step = Steps.Step

class Check extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '高姿态',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526905577349&di=a3da7639f5b20d172a5ceb18756d0ef5&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2765035733%2C1282524408%26fm%3D214%26gp%3D0.jpg',
      subtitle: '莫干山项目',
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().getSeconds()
      })
    })
  }

  render() {
    const { title, img, subtitle, time } = this.state
    return <div className='pageBox'>
      <Header
        title='考勤打卡'
        leftIcon='icon-back'
        leftTitle1='我的'
        rightTitle='统计'
        leftClick1={() => {
          this.props.match.history.push(urls.MINE)
        }}
        rightClick={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <div className={style.check}>
          <Item
            thumb={img}
          >
            <span className={style.title}>{title}</span><Brief className={style.subtitle}>项目组:{subtitle}</Brief>
          </Item>
          <div className={style['check-info']}>
            <div className={style.tip}>今天继续向梦想出发吧</div>
            <Steps size='small' current={1}>
              <Step title='上班时间09：00' description='打卡时间 11:59' />
              <Step title='下班时间18:00' description={<div style={{ textAlign: 'center' }}><Button className={style.btn} type='primary'><span className={style['btn-title']}>下班打卡</span><span className={style.time}>{time}</span></Button></div>} />
            </Steps>
          </div>
        </div>
      </Content>
    </div>
  }
}

export default Check
