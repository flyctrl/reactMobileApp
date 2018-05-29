/**
 * @Author: sunshiqiang
 * @Date: 2018-05-22 10:52:31
 * @Title: 发票详情
 */
import React, { Component } from 'react'
import { Radio, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import * as urls from 'Contants/urls'
import { Header, Content } from 'Components'
import style from './style.css'
import { getQueryString } from 'Contants/tooler'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: getQueryString('id'),
      data: {},
      checked: '个人'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          title: '个人',
          target: '杭州市西湖区莫干山有限公司',
          money: '100,000',
          time: '2018-05-01 14:20:00',
          value: '杭州市西湖区莫干山项目'
        }
      })
    })
  }

  handelRadio = (e, checked) => {
    this.setState({ checked })
  }
  handelSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        value.avatar = this.state.avatar[0] && this.state.avatar[0].url
        console.info('success', value)
      }
    })
  }

  render() {
    const { data, checked } = this.state
    const { getFieldProps } = this.props.form
    return <div className='pageBox'>
      <Header
        title='申请发票'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.INVOICE)
        }}
      />
      <Content>
        <div className={style.detail}>
          <div className={style.info}>
            <div className='my-bottom-border'>
              <div className={style.title}>发票抬头</div>
              <Radio className={style['my-radio']} onChange={e => this.handelRadio(e, '个人')} checked={checked === '个人'}><span>个人</span></Radio>
              <Radio className={style['my-radio']} onChange={e => this.handelRadio(e, '企业')} checked={checked === '企业'}><span>企业</span></Radio>
            </div>
            <div className='my-bottom-border'>
              <div className={style.title}>税号</div>
              <InputItem {...getFieldProps('sh', {
                initialValue: data.sh
              })} placeholder='填写税号'/></div>
            <div className='my-bottom-border'>
              <div className={style.title}>发票内容</div>
              <InputItem {...getFieldProps('value', {
                initialValue: data.value
              })} placeholder='填写发票内容'/></div>
            <div className='my-bottom-border'>
              <div className={style.title}>发票金额</div>
              <InputItem {...getFieldProps('money', {
                initialValue: data.money
              })} placeholder='填写发票金额'/></div>
            <div className='my-bottom-border'>
              <div className={style.title}>备注说明</div>
              <InputItem {...getFieldProps('dsc', {
                initialValue: data.dsc
              })} placeholder='填写备注说明'/></div>
            <div className='my-bottom-border'>
              <div className={style.title}>地址、电话</div>
              <InputItem {...getFieldProps('phone', {
                initialValue: data.phone
              })} placeholder='填写注册地址、注册电话'/></div>
            <div className='my-bottom-border'>
              <div className={style.title}>开户行及帐号</div>
              <InputItem {...getFieldProps('bank', {
                initialValue: data.bank
              })} placeholder='填写开户银行及银行帐号'/></div>
          </div>
          <Button className={style.active} type='primary' onClick={this.handelSubmit}>提交</Button>
        </div>
      </Content>
    </div>
  }
}

export default createForm()(Detail)
