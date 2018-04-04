/*
* @Author: baosheng
* @Date:   2018-04-02 22:27:03
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-02 22:27:06
*/
import fetch from 'Util/fetch'
import { message } from 'antd'
import { showSpin } from 'Models/layout'

// 获取数据类接口
export const Fetch = (url, params) => {
  showSpin({ bool: true, content: '正在加载数据....' })
  return fetch(url, params).then((res) => {
    if (res.code === 0) {
      showSpin()
      return res.data
    } else {
      showSpin()
      message.error(res.message, 2)
    }
  }, (err) => {
    showSpin()
    message.error(err.message, 2)
  })
}

// 保存类接口
export const FetchSave = (url, params) => {
  showSpin({ bool: true, content: '正在加载数据....' })
  return fetch(url, params).then((res) => {
    console.log(res)
    if (res.code === 0) {
      showSpin()
      message.success(res.message, 2)
      return res.data
    } else {
      showSpin()
      message.error(res.message, 2)
    }
  }, (err) => {
    showSpin()
    message.error(err.message, 2)
  })
}

export default {
  logout(params) { // 登出
    return FetchSave('/api/logout.json', params)
  }
}