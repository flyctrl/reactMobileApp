/*
* @Author: chengbs
* @Date:   2018-04-09 13:26:57
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-23 20:56:21
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputItem, Button, Toast } from 'antd-mobile'
import { Content } from 'Components'
import { createForm } from 'rc-form'
import style from './style.css'
import logo from 'Src/assets/logo.png'
import * as urls from 'Contants/urls'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      value: '',
    }
  }
  onSubmit = () => { // 表单提交
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue())
      }
    })
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className='pageBox'>
        <Content isHeader={false}>
          <div className={style['logobox']}><img src={logo} /><span>新建筑 新生活</span></div>
          <div className={style['loginTitle']}>登 录</div>
          <form className={style['loginForm']}>
            <InputItem
              {...getFieldProps('phone', {
                rules: [
                  { required: true, message: '请输入您的用户名/手机号码' }
                ],
              })}
              clear
              placeholder='用户名 / 手机号'
              error={!!getFieldError('phone')}
              onErrorClick={() => {
                Toast.fail(getFieldError('phone'), 1)
              }}
              prefixListCls='login'
            ></InputItem>
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  { required: true, message: '请输入密码' },
                ],
              })}
              clear
              type='password'
              placeholder='密码'
              prefixListCls='login'
              error={!!getFieldError('password')}
              onErrorClick={() => {
                Toast.fail(getFieldError('password'), 1)
              }}
            ></InputItem>
            <div className={style['forgetPwd']}>
              <Link to={ urls.FORGETPWD } className={style['forgetPwdBtn']}>忘记密码?</Link>
            </div>
            <Button type='primary' className={style['submitBtn']} onClick={this.onSubmit}>登  录</Button>
            <div className={style['register']}>
              <Link to={ urls.REGISTER } className={style['registeBtn']}>没有帐号？立即去注册</Link>
            </div>
          </form>
        </Content>
      </div>
    )
  }
}

const LoginWrapper = createForm()(Login)
export default LoginWrapper
