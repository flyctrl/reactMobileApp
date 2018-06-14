/**
 * @Author: sunshiqiang
 * @Date: 2018-05-28 13:52:28
 * @Title: 编辑个人资料
 */
import React, { Component } from 'react'
import fetch from 'Util/fetch'
import { InputItem, ImagePicker, Picker, List, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import * as urls from 'Contants/urls'
import api from 'Util/api'
import { Header, Content, NewIcon } from 'Components'
import addressOptions from 'Contants/address-options'
import style from './style.css'

class PersonalData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: [],
      data: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const data = {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526533438825&di=b42ed5edc4abc41b39a33311e674f0d1&imgtype=0&src=http%3A%2F%2Fmp2.qiyipic.com%2Fimage%2F20180509%2Fb4%2Fc5%2Fppu_266729910102_pp_601_300_300.jpg',
      }
      let avatar = []
      data.avatar && avatar.push({ url: data.avatar })
      this.setState({
        data,
        avatar
      }, () => {
        this.labelFocusInst.focus()
      })
    }, 500)
  }

  handleAvatarChange = async (avatar, a, b) => {
    console.log(a, b)
    if (avatar[0]) {
      let formData = new FormData()
      formData.append('avatar', avatar[0].file)
      fetch.post('/users/avatar', formData)
      const data = await api.Mine.Personaldara.avatar(formData)
      avatar[0].url = data.small
      console.log(avatar)
      this.setState({ avatar })
    } else {
      this.setState({ avatar })
    }
  }
  handelSubmit = () => {
    this.props.form.validateFields((err, value) => {
      const validateAry = ['name', 'sex', 'ssq', 'street', 'address']
      if (!err) {
        value.avatar = this.state.avatar[0] && this.state.avatar[0].url
        if (!value.avatar) {
          Toast.fail('请上传图片', 1)
          return
        }
        value.sex = value.sex[0]
        Toast.success('success', 3)
        console.info('success', value)
      } else {
        for (let value of validateAry) {
          if (err[value]) {
            Toast.fail(this.props.form.getFieldError(value), 1)
            return
          }
        }
      }
    })
  }

  render() {
    const { getFieldProps } = this.props.form
    const { data, avatar } = this.state
    return <div className='pageBox'>
      <Header
        className={style['personal-data-header']}
        title='编辑个人资料'
        leftTitle2='取消'
        rightTitle='完成'
        leftClick2={() => {
          this.props.match.history.push(urls.MINE)
        }}
        rightClick={this.handelSubmit}
      />
      <Content>
        <div className={style['personal-data']}>
          <div className={`${style.header} my-bottom-border`}>
            <div className={style.avatar}>
              <div className={style.item}>
                <div className={style['up-img']}>
                  <div>
                    <NewIcon className={style.icon} type='icon-camera'/>
                    <span className={style.title}>上传头像</span>
                    <ImagePicker
                      className={style['img-picker']}
                      files={avatar}
                      onChange={this.handleAvatarChange}
                      selectable={avatar.length < 1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.describe}>
              <InputItem
                {...getFieldProps('name', {
                  initialValue: data.name,
                  rules: [{
                    required: true, message: '请输入姓名',
                  }]
                })}
                clear
                placeholder='姓名'
                ref={el => {
                  this.labelFocusInst = el
                }}
              />
            </div>
          </div>
          <List>
            <Picker
              extra='请选择'
              cols='1'
              data={[{
                label: '未知',
                value: '0',
              }, {
                label: '男',
                value: '1',
              }, {
                label: '女',
                value: '2',
              }]}
              {...getFieldProps('sex', {
                initialValue: data.sex === undefined ? data.sex : [data.sex],
                rules: [{
                  required: true, message: '请选择性别'
                }]
              })}
            >
              <List.Item arrow='down'>性别</List.Item>
            </Picker>
            <Picker
              extra='请选择'
              data={addressOptions}
              {...getFieldProps('ssq', {
                initialValue: data.ssq,
                rules: [{
                  required: true, message: '请选择省·市·区／县'
                }]
              })}
            >
              <List.Item arrow='down'>省·市·区／县</List.Item>
            </Picker>
            <InputItem
              {...getFieldProps('street', {
                initialValue: data.street,
                rules: [{
                  required: true, message: '请输入街道'
                }]
              })}
              clear
              placeholder='请输入街道'
            >街道</InputItem>
            <InputItem
              {...getFieldProps('address', {
                initialValue: data.address,
                rules: [{
                  required: true, message: '请输入地址'
                }]
              })}
              clear
              placeholder='请输入地址'
            >地址</InputItem>
          </List>
        </div>
      </Content>
    </div>
  }
}

export default createForm()(PersonalData)
