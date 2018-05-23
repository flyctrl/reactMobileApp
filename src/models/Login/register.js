/*
* @Author: chengbs
* @Date:   2018-04-09 13:27:30
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-23 20:56:31
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputItem, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { Content } from 'Components'
import Timer from './timer'
import style from './style.css'
import logo from 'Src/assets/logo.png'
import * as urls from 'Contants/urls'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      value: '',
      codeDisabled: false,
      codeText: '获取验证码'
    }
  }
  onSubmit = () => { // 表单提交
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue())
      }
    })
  }
  handleOver() {
    this.setState({
      codeDisabled: false,
      codeText: '重新发送'
    })
  }
  getCode() {
    const phoneErr = this.props.form.getFieldError('phone')
    const phone = this.props.form.getFieldValue('phone')
    if (phone === undefined || phone === '') {
      Toast.fail('请输入手机号码', 1)
    } else if (phoneErr !== undefined) {
      Toast.fail('请输入正确格式手机号码', 1)
    }
    if (phoneErr === undefined && phone !== undefined) {
      this.setState({
        codeDisabled: true
      })
      console.log(phone)
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className='pageBox'>
        <Content isHeader={false}>
          <div className={`${style['logobox']} ${style['regLogobox']}`}><img src={logo} /><span>新建筑 新生活</span></div>
          <div className={style['loginTitle']}>注 册</div>
          <form className={style['registerForm']}>
            <InputItem
              {...getFieldProps('phone', {
                rules: [
                  { required: true, message: '请输入您的手机号/用户名' }
                ],
              })}
              clear
              placeholder='手机号/用户名'
              prefixListCls='register'
              error={!!getFieldError('phone')}
              onErrorClick={() => {
                Toast.fail(getFieldError('phone'), 1)
              }}
            ></InputItem>
            <div className={style['codeBox']}>
              <InputItem
                {...getFieldProps('code', {
                  rules: [
                    { required: true, message: '请输入验证码' },
                  ],
                })}
                clear
                placeholder='验证码'
                prefixListCls='register'
                error={!!getFieldError('code')}
                onErrorClick={() => {
                  Toast.fail(getFieldError('code'), 1)
                }}
              >
              </InputItem>
              <Button className={ style['codebtn'] } style={{ position: 'absolute' }} disabled={this.state.codeDisabled} type='ghost' size='small' onClick={this.getCode.bind(this)}>
                {
                  this.state.codeDisabled ? <Timer onOver={this.handleOver.bind(this)} /> : this.state.codeText
                }
              </Button>
            </div>
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  { required: true, message: '请输入您的密码' }
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
            <InputItem
              {...getFieldProps('confirmPassword', {
                rules: [
                  { required: true, message: '请输入您的确认密码' }
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
            <Button type='primary' className={ style['submitBtn'] } onClick={this.onSubmit}>确 定</Button>
            <div className={style['register']}>
              <Link to={ urls.LOGIN } className={style['loginBtn']}>已有帐号？去登录</Link>
            </div>
          </form>
        </Content>
      </div>
    )
  }
}

const RegisterWrapper = createForm()(Register)
export default RegisterWrapper
