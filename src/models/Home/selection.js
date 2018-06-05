/*
* @Author: chengbs
* @Date:   2018-05-24 19:06:26
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-05 22:27:38
*/
import React, { Component } from 'react'
import { Picker, List, Button } from 'antd-mobile'
import { Header, Content } from 'Components'
import history from 'Util/history'
import * as urls from 'Contants/urls'
import NewIcon from 'Components/NewIcon'
import addressOptions from 'Contants/address-options'
import * as tooler from 'Contants/tooler'
import style from './style.css'

const workType = [
  {
    label: '木工',
    value: '001'
  },
  {
    label: '水电工',
    value: '002'
  },
  {
    label: '维修工',
    value: '003'
  },
  {
    label: '土工',
    value: '004'
  },
  {
    label: '搬运工',
    value: '005'
  }
]

class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickerValue: [],
      workTypeValue: [],
      projectTypeValue: []
    }
    this.onHandleReset = this.onHandleReset.bind(this)
    this.handleWorkType = this.handleWorkType.bind(this)
    this.handleProjectType = this.handleProjectType.bind(this)
    this.handlePayWay = this.handlePayWay.bind(this)
  }
  onHandleReset() { // 重设按钮
    console.log('重设')
  }
  handleWorkType(v) { // 工种类别下拉框
    this.setState({ workTypeValue: v })
    console.log(v)
    console.log(tooler.getSel(v, workType))
  }
  handleProjectType(v) { // 工程类别下拉框
    this.setState({ projectTypeValue: v })
    console.log(v)
  }
  handlePayWay(ev) { // 付款方式
  }
  render() {
    let addressLoca = tooler.getSel(this.state.pickerValue, addressOptions)
    console.log(addressLoca)
    return (
      <div className='pageBox'>
        <Header
          leftClick1={() => {
            history.push(urls.HOME)
          }}
          title='筛选'
          leftIcon='icon-back'
          leftTitle1='返回'
          rightTitle='重设'
          rightClick={this.onHandleReset}
        />
        <Content>
          <dl className={style['selection-list']}>
            <dt>
              付款方式
            </dt>
            <dd>
              <a className={style['selected']} onClick={this.handlePayWay}>全部</a>
              <a onClick={this.handlePayWay}>日结</a>
              <a onClick={this.handlePayWay}>月结</a>
            </dd>
          </dl>
          <dl className={`${style['selection-list']} ${style['stream-time']}`}>
            <dt>开工时间</dt>
            <dd>
              <span className={`${style['start-date']} my-full-border`}></span>
              <em>-</em>
              <span className={`${style['start-end']} my-full-border`}></span>
            </dd>
          </dl>
          <dl className={`${style['selection-list']} ${style['all-area']}`}>
            <dt>
              <span>地区：</span>
              <div className={style['address-picker']}>
                <Picker
                  extra='所有地区'
                  data={addressOptions}
                  value={this.state.pickerValue}
                  onChange={v => this.setState({ pickerValue: v })}
                  onOk={v => this.setState({ pickerValue: v })}
                >
                  <List.Item arrow='down'></List.Item>
                </Picker>
              </div>
            </dt>
            <dd>
              <a><NewIcon type='icon-location-gray' /> { '浙江' }</a>
              <span className={style['reset-location']}>重新定位</span>
            </dd>
          </dl>
          <dl className={`${style['selection-list']}`}>
            <dt>
              承包方式
            </dt>
            <dd>
              <a className={style['selected']}>全部</a>
              <a>日结</a>
              <a>月结</a>
            </dd>
          </dl>
          <dl className={`${style['selection-list']} ${style['picker-title']}`}>
            <dt>
              <span>工种类别</span>
              <div className={style['right-picker']}>
                <Picker
                  extra=' '
                  data={workType}
                  cols={1}
                  onChange={this.handleWorkType}
                  onOk={v => this.setState({ workTypeValue: v })}
                >
                  <List.Item arrow='down'> </List.Item>
                </Picker>
              </div>
            </dt>
            <dd className={style['big-tags']}>
              <a className={style['selected']}>全部</a>
              <a>泥工</a>
              <a>焊工</a>
              <a>电工</a>
              <a>钢筋工</a>
              <a>管工</a>
            </dd>
          </dl>
          <dl className={`${style['selection-list']} ${style['picker-title']}`}>
            <dt>
              <span>工程类别</span>
              <div className={style['right-picker']}>
                <Picker
                  extra=' '
                  data={workType}
                  cols={1}
                  onChange={this.handleProjectType}
                  onOk={v => this.setState({ projectTypeValue: v })}
                >
                  <List.Item arrow='down'> </List.Item>
                </Picker>
              </div>
            </dt>
            <dd className={style['big-tags']}>
              <a className={style['selected']}>全部</a>
              <a>泥工</a>
              <a>焊工</a>
              <a>电工</a>
              <a>钢筋工</a>
              <a>管工</a>
            </dd>
          </dl>
          <Button className={style['selection-submit']} type='primary'>提 交</Button>
        </Content>
      </div>
    )
  }
}

export default Selection
