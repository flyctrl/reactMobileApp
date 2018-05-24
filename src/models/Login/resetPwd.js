/*
* @Author: chengbs
* @Date:   2018-05-24 14:18:18
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-24 14:37:26
*/
import React, { Component } from 'react'
import { InputItem, Button, Toast, List } from 'antd-mobile'
import { createForm } from 'rc-form'
import { Content } from 'Components'
import style from './style.css'
import logo from 'Src/assets/logo.png'

class RestPwd extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  onSubmit = () => { // 表单提交
    let validateAry = ['password', 'confirmPassword']
    const { getFieldError } = this.props.form
    this.props.form.validateFields((error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue())
      } else {
        for (let value of validateAry) {
          if (error[value]) {
            Toast.fail(getFieldError(value), 1)
            return
          }
        }
      }
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两次密码不一致')
    } else {
      callback()
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true })
    }
    callback()
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className='pageBox'>
        <Content isHeader={false}>
          <div className={`${style['logobox']} ${style['regLogobox']}`}><img src={logo} /><span>新建筑 新生活</span></div>
          <div className={style['loginTitle']}>重置密码</div>
          <form className={style['registerForm']}>
            <List>
              <InputItem
                {...getFieldProps('password', {
                  rules: [
                    { required: true, message: '请输入您的密码' },
                    { pattern: /^.{6,20}$/, message: '格式错误，密码长度6~20位字符' },
                    { validator: this.validateToNextPassword }
                  ],
                })}
                clear
                placeholder='密码'
                prefixListCls='register'
                type='password'
                error={!!getFieldError('password')}
                onErrorClick={() => {
                  Toast.fail(getFieldError('password'), 1)
                }}
              ></InputItem>
            </List>
            <List>
              <InputItem
                {...getFieldProps('confirmPassword', {
                  rules: [
                    { required: true, message: '请输入您的确认密码' },
                    { pattern: /^.{6,20}$/, message: '格式错误，密码长度6~20位字符' },
                    { validator: this.compareToFirstPassword }
                  ],
                })}
                clear
                placeholder='确认密码'
                prefixListCls='register'
                type='password'
                error={!!getFieldError('confirmPassword')}
                onErrorClick={() => {
                  Toast.fail(getFieldError('confirmPassword'), 1)
                }}
              ></InputItem>
            </List>
            <Button type='primary' className={ style['submitBtn'] } activeClassName={style['activeSubmitBtn']} onClick={this.onSubmit}>确 定</Button>
          </form>
        </Content>
      </div>
    )
  }
}

const RestPwdWrapper = createForm()(RestPwd)
export default RestPwdWrapper
