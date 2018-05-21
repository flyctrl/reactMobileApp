import React, { Component } from 'react'
import { ImagePicker, Button } from 'antd-mobile'
import { Header, Content, NewIcon } from 'Components'
import * as urls from 'Contants/urls'
import style from './style.css'

class Authenticate extends Component {
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
    console.log(submitParams)
  }

  render() {
    const { idUp, idDown, PCLL } = this.state
    return <div className={style.Authenticate}>
      <Header
        title='资格认证'
        leftIcon='icon-back'
        leftTitle1='返回'
        leftClick1={() => {
          this.props.match.history.push(urls.MINE)
        }}
      />
      <Content>
        <div className={style.item}>
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
        <div className={style.item}>
          <div className={style.header}>
            <span className={style.title}>实名认证</span>
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
      </Content>
    </div>
  }
}

export default Authenticate
