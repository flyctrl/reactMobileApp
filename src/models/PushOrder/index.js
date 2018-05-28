/*
* @Author: chengbs
* @Date:   2018-04-08 16:18:37
* @Last Modified by:   chengbs
* @Last Modified time: 2018-05-28 23:24:13
*/
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import * as urls from 'Contants/urls'
import { List, Radio, Picker, InputItem, DatePicker, TextareaItem, Button } from 'antd-mobile'
import { Header, Content } from 'Components'
import { createForm } from 'rc-form'
import history from 'Util/history'
import style from './style.css'
import Upload from 'rc-upload'
import NewIcon from 'Components/NewIcon'
// import { district } from 'antd-mobile-demo-data'

class PushOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: []
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    // this.delUploadList = this.delUploadList.bind(this)
  }
  delUploadList(ev) {
    console.log(ev)
    const { fileList } = this.state
    let newFileList = []
    fileList.map((item) => {
      if (item.uid !== ev) {
        newFileList.push(item)
      }
    })
    console.log(newFileList)
    this.setState({
      fileList: newFileList
    })
  }
  onHandleSubmit() {
    const { fileList } = this.state
    const formData = new FormData()
    fileList.forEach((file) => {
      console.log(file)
      formData.append('files[]', file)
    })
    console.log(formData.get('files[]'))
  }
  render() {
    const { getFieldProps } = this.props.form
    const { fileList } = this.state
    const uploadProps = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onSuccess() {
        console.log('success')
      },
      data(files) {
        console.log(files)
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }), () => {
          console.log(this.state.fileList)
        })
        return false
      }
    }
    return (
      <div className='pageBox'>
        <Header
          title='发布工单'
          leftIcon='icon-back'
          leftTitle1='返回'
          leftClick1={() => {
            history.push(urls.HOME)
          }}
          leftTitle2='关闭'
          leftClick2={() => {
            history.push(urls.HOME)
          }}
          rightTitle='下一步'
          rightClick={() => {
            console.log('下一步')
          }}
        />
        <Content>
          <form className={style['pushOrderForm']}>
            <List>
              <Radio name='proRadio' className={style['pro-radio']} onChange={e => console.log('checkbox', e)}>关联已有项目</Radio>
              <Radio name='proRadio' className={style['pro-radio']} onChange={e => console.log('checkbox', e)}>不关联已有项目</Radio>
            </List>
            <List>
              <Picker cols={1} {...getFieldProps('district3')} className='forss'>
                <List.Item arrow='horizontal'>项目名称</List.Item>
              </Picker>
            </List>
            <List>
              <InputItem
                {...getFieldProps('autofocus')}
                clear
                placeholder='auto focus'
                ref={(el) => { this.autoFocusInst = el }}
              >施工地址</InputItem>
            </List>
            <List>
              <DatePicker
                value={this.state.date}
                onChange={date => this.setState({ date })}
              >
                <List.Item arrow='horizontal'>施工时间</List.Item>
              </DatePicker>
            </List>
            <List>
              <InputItem
                {...getFieldProps('autofocus')}
                clear
                placeholder='auto focus'
                ref={(el) => { this.autoFocusInst = el }}
              >价格预算</InputItem>
            </List>
            <List>
              <Picker cols={1} {...getFieldProps('district3')} className='forss'>
                <List.Item arrow='horizontal'>工种需求</List.Item>
              </Picker>
            </List>
            <List>
              <label>需求描述</label>
              <TextareaItem
                {...getFieldProps('count', {
                  initialValue: '计数功能,我的意见是...',
                })}
                rows={5}
                count={500}
              />
            </List>
            <List>
              <Upload {...uploadProps} ><NewIcon type='icon-upload' className={style['push-upload-icon']} /></Upload>
              <ul className={style['file-list']}>
                {
                  fileList.map((item, index, ary) => {
                    return (
                      <li key={index} className='my-bottom-border'><NewIcon type='icon-paperclip' className={style['file-list-icon']}/><a>{item.name}</a><i onClick={this.delUploadList.bind(this, item.uid)}>&#10005;</i></li>
                    )
                  })
                }
              </ul>
            </List>
            <Button type='primary' onClick={this.onHandleSubmit}>确 定</Button>
          </form>
        </Content>
      </div>
    )
  }
}

const PushOrderWrapper = createForm()(PushOrder)
export default PushOrderWrapper
