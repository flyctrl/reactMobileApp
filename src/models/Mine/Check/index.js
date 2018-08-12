/**
 * @Author: baosheng
 * @Date: 2018-05-22 18:16:38
 * @Title: 考勤管理
 */
import React, { Component } from 'react'
import { List, Steps, Button, Picker, Toast, Icon } from 'antd-mobile'
import * as urls from 'Contants/urls'
import { Header, Content } from 'Components'
import { getQueryString } from 'Contants/tooler'
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
      time: '',
      visible: false,
      pickerValue: [],
      projects: [
        {
          label: '莫干山项目',
          value: '2013',
        },
        {
          label: '拱墅区项目',
          value: '2014',
        },
      ],
      position: {}, // 定位信息
      inPosition: true // 是否在范围内
    }
  }

  componentWillMount() {
    this._getPosition()
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

  _getPosition () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { // 定位数据获取成功响应
        Toast.success('纬度: ' + position.coords.latitude + '\n' +
          '经度: ' + position.coords.longitude + '\n' +
          '海拔: ' + position.coords.altitude + '\n' +
          '水平精度: ' + position.coords.accuracy + '\n' +
          '垂直精度: ' + position.coords.altitudeAccura)
        this.setState({ position })
      }, (error) => { // 定位数据获取失败响应
        switch (error.code) {
          case error.PERMISSION_DENIED:
            Toast.fail('您拒绝对获取地理位置的请求')
            break
          case error.POSITION_UNAVAILABLE:
            Toast.fail('位置信息是不可用的')
            break
          case error.TIMEOUT:
            Toast.fail('请求您的地理位置超时')
            break
          case error.UNKNOWN_ERROR:
            Toast.fail('未知错误')
            break
        }
      })
    } else {
      Toast('您的浏览器不支持使用HTML 5来获取地理位置服务')
    }
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
  handelSelect = (v) => {
    this.setState({ pickerValue: v, visible: false })
    console.log(v)
  }

  render() {
    const { data, status, time, projects, inPosition } = this.state
    return <div className='pageBox'>
      <Header
        title='考勤打卡'
        leftIcon='icon-back'
        leftTitle1='返回'
        rightTitle='统计'
        leftClick1={() => {
          this.props.match.history.push(urls[getQueryString('url')])
        }}
        rightClick={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <div className={style.check}>
          <Picker
            title='选择地区'
            extra='请选择(可选)'
            cols='1'
            data={projects}
            value={this.state.pickerValue}
            onPickerChange={v => this.setState({ pickerValue: v })}
            onChange={v => this.setState({ pickerValue: v })}
            onOk={this.handelSelect}
          >
            <Item
              thumb={data.img}
              arrow='horizontal'
            >
              <span className={style.title}>{data.title}</span><Brief><div className={style.subtitle}>项目组:{data.subtitle}</div></Brief>
            </Item>
          </Picker>
          <div className={style['check-info']}>
            <div className={style.prompt}>今天继续向梦想出发吧</div>
            <Steps size='small' current={1}>
              <Step title='上班时间09：00' description={<span>{data.checkInTime ? <span>打卡时间: {data.checkInTime}{(data.checkInTime.split(':')[0] >= 9 && data.checkInTime.split(':')[1] > 0) &&
                < span className={style.tip}>迟到</span>}</span> : '未打卡'}</span>}/>
              {(status || data.checkInTime) ? <Step title='下班时间18:00' description={<span>{data.checkOutTime ? <span>打卡时间: {data.checkOutTime}{data.checkOutTime.split(':')[0] < 18 &&
                < span className={style.tip}>早退</span>}</span> : '未打卡'}</span>}/> : null}
            </Steps>
            <div style={{ textAlign: 'center' }}><Button onClick={this.handleCheckTime} className={style.btn} type='primary'><span
              className={style['btn-title']}>{(status || data.checkInTime) ? '下' : '上'}班打卡</span><span
              className={style.time}>{time}</span></Button></div>
            <div className={style['position-info']} >{inPosition ? <div><Icon type='check-circle' size='md' color='#08934A' /><span>已加入考勤范围：浙江省杭州…</span></div> : <div><Icon type='cross-circle-o' size='md' color='red' /><span>未进入考勤范围</span></div> }</div>
          </div>

        </div>
      </Content>
    </div>
  }
}

export default Check
