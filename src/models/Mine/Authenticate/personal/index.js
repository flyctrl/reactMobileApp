/**
 * @Author: sunshiqiang
 * @Date: 2018-05-29 17:40:03
 * @Title: 个人资格认证
 */
import React, { Component } from 'react'
import { ImagePicker, Button, InputItem, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { Header, Content, NewIcon } from 'Components'
import * as urls from 'Contants/urls'
import style from './style.css'

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idUp: [], // 身份证正面
      idDown: [], // 身份证反面
      PCLL: [], // 专业证书
      submitParams: {}
    }
  }

  componentDidMount() {
  }

  handleChange = (files, type) => {
    const { submitParams } = this.state
    submitParams[type] = files[0] && files[0].url
    this.setState({
      [type]: files,
      submitParams
    }, () => {
      console.log(submitParams)
    })
  }
  handleSubmit = () => {
    const { submitParams } = this.state
    const validateAry = ['person', 'phone']
    const imghAry = [
      { key: 'idUp', message: '请上传身份证正面照片' },
      { key: 'idDown', message: '请上传身份证反面照片' },
      { key: 'PCLL', message: '请上传专业技术证书照片' }
    ]
    const { validateFields, getFieldError } = this.props.form
    validateFields((err, value) => {
      if (!err) {
        const imgErr = imghAry.find(item => !submitParams[item.key])
        if (imgErr) {
          Toast.fail(imgErr.message, 1)
        } else {
          console.info('success', { ...value, ...submitParams })
        }
      } else {
        const validateErr = validateAry.find(item => err[item])
        if (validateErr) {
          Toast.fail(getFieldError(validateErr), 1)
        }
      }
    })
  }

  render() {
    const { idUp, idDown, PCLL } = this.state
    const { getFieldProps } = this.props.form
    return <div className='pageBox'>
      <Header
        title='个人认证'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.AUTHENTICATE)
        }}
      />
      <Content>
        <div className={style.personal}>
          <div className={`${style.input} my-bottom-border`}>
            <div className={style.title}>联系人</div>
            <InputItem {...getFieldProps('person', {
              rules: [{
                required: true, message: '请输入联系人',
              }]
            })} placeholder='请输入联系人'/></div>
          <div className={`${style.input} my-bottom-border`}>
            <div className={style.title}>联系电话</div>
            <InputItem {...getFieldProps('phone', {
              rules: [{
                required: true, message: '请输入联系电话',
              }]
            })} placeholder='请输入联系电话'/></div>
          <div className={`${style.item} my-bottom-border`}>
            <div className={style.header}>
              <span className={style.title}>实名认证</span>
              <span className={style.example}>查看示例图</span>
            </div>
            <div className={style['up-img']}>
              <div>
                <NewIcon className={style.icon} type='icon-camera'/>
                <span className={style.title}>身份证正面</span>
                <ImagePicker
                  className={style['img-picker']}
                  files={idUp}
                  onChange={(files) => this.handleChange(files, 'idUp')}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={idUp.length < 1}
                />
              </div>
            </div>
            <div className={style['up-img']}>
              <div>
                <NewIcon className={style.icon} type='icon-camera'/>
                <span className={style.title}>身份证反面</span>
                <ImagePicker
                  className={style['img-picker']}
                  files={idDown}
                  onChange={(files) => this.handleChange(files, 'idDown')}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={idDown.length < 1}
                />
              </div>
            </div>
          </div>
          <div className={`${style.item} my-bottom-border`}>
            <div className={style.header}>
              <span className={style.title}>职称认证</span>
              <span className={style.example}>查看示例图</span>
            </div>
            <div className={style['up-img']}>
              <div>
                <NewIcon className={style.icon} type='icon-camera'/>
                <span className={style.title}>专业技术资格证</span>
                <ImagePicker
                  className={style['img-picker']}
                  files={PCLL}
                  onChange={(files) => this.handleChange(files, 'PCLL')}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={PCLL.length < 1}
                />
              </div>
            </div>
          </div>
          <Button className={style.submit} onClick={this.handleSubmit} type='primary'>提 交</Button>
        </div>
      </Content>
    </div>
  }
}

export default createForm()(Personal)

