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
      data: {},
      status: 0,
      time: ''
    }
  }

  componentWillMount() {
    setTimeout(() => {
      const data = {
        title: '高姿态',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526905577349&di=a3da7639f5b20d172a5ceb18756d0ef5&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2765035733%2C1282524408%26fm%3D214%26gp%3D0.jpg',
        subtitle: '莫干山项目',
        checkInTime: '', // 上班时间
        checkOutTime: '', // 下班时间
      }
      const status = data.checkInTime ? 1 : 0
      this.setState({
        data,
        status
      })
    }, 1000)
    setInterval(() => {
      const { data } = this.state
      let status = 0
      if (data.checkInTime) {
        status = 1
      } else if (Number(new Date().Format('hh')) >= 18) {
        status = 1
      }
      this.setState({
        time: new Date().Format('hh:mm:ss'),
        status
      })
    }, 1000)
  }

  handleCheckTime = () => {
    const { status, data } = this.state
    if (status) {
      setTimeout(() => {
        data.checkOutTime = new Date().Format('hh:mm:ss')
        this.setState({
          data
        })
      })
    } else {
      data.checkInTime = new Date().Format('hh:mm:ss')
      this.setState({
        data,
        status: 1
      })
    }
  }

  render() {
    const { data, status, time } = this.state
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
            thumb={data.img}
          >
            <span className={style.title}>{data.title}</span><Brief className={style.subtitle}>项目组:{data.subtitle}</Brief>
          </Item>
          <div className={style['check-info']}>
            <div className={style.prompt}>今天继续向梦想出发吧</div>
            <Steps size='small' current={1}>
              <Step title='上班时间09：00' description={<span>{data.checkInTime ? <span>打卡时间: {data.checkInTime}{(data.checkInTime.split(':')[0] >= 9 && data.checkInTime.split(':')[1] > 0) && < span className={style.tip}>迟到</span>}</span> : '未打卡'}</span> }/>
              {(status || data.checkInTime) ? <Step title='下班时间18:00' description={<span>{data.checkOutTime ? <span>打卡时间: {data.checkOutTime}{data.checkOutTime.split(':')[0] < 18 && < span className={style.tip}>早退</span>}</span> : '未打卡'}</span>}/> : null}
            </Steps>
            <div style={{ textAlign: 'center' }}><Button onClick={this.handleCheckTime} className={style.btn} type='primary'><span
              className={style['btn-title']}>{(status || data.checkInTime) ? '下' : '上'}班打卡</span><span
              className={style.time}>{time}</span></Button></div>
          </div>
        </div>
      </Content>
    </div>
  }
}

export default Check
