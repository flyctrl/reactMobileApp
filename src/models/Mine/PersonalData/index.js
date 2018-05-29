/**
 * @Author: sunshiqiang
 * @Date: 2018-05-28 13:52:28
 * @Title: 编辑个人资料
 */
import React, { Component } from 'react'
import { InputItem, ImagePicker } from 'antd-mobile'
import { createForm } from 'rc-form'
import * as urls from 'Contants/urls'
import { Header, Content, NewIcon } from 'Components'
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
        name: '宋雨琦',
        sex: '女',
        address: '浙江省杭州市拱墅区',
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

  handleAvatarChange = (avatar) => {
    this.setState({ avatar })
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
                      onImageClick={(index, fs) => console.log(index, fs)}
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
                })}
                clear
                placeholder='姓名'
                ref={el => {
                  this.labelFocusInst = el
                }}
              />
            </div>
          </div>
          <div className={style.content}>
            <InputItem
              {...getFieldProps('sex', {
                initialValue: data.sex,
              })}
              clear
              placeholder='性别'
            >性别</InputItem>
            <InputItem
              {...getFieldProps('address', {
                initialValue: data.address,
              })}
              clear
              placeholder='省·市·区／县'
            >省·市·区／县</InputItem>
          </div>
        </div>
      </Content>
    </div>
  }
}

export default createForm()(PersonalData)
