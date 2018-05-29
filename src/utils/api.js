/*
* @Author: baosheng
* @Date:   2018-04-02 22:27:03
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-02 22:27:06
*/
import fetch from 'Util/fetch'
import { Toast } from 'antd-mobile'

// 获取数据类接口
export const Fetch = (url, params, method = 'post') => {
  if (method === 'get') {
    params = { params }
  }
  return fetch[method](url, params).then((res) => {
    if (res.code === 0) {
      return res.data
    } else {
      Toast.fail(res.message, 1)
    }
  }, (err) => {
    Toast.fail(err.message, 1)
  })
}

// 保存类接口
export const FetchSave = (url, params, method = 'post') => {
  if (method === 'get') {
    params = { params }
  }
  return fetch[method](url, params).then((res) => {
    if (res.code === 0) {
      Toast.success(res.message, 1)
      return res.data
    } else {
      Toast.fail(res.message, 1)
    }
  }, (err) => {
    Toast.fail(err.message, 1)
  })
}

export default {
  logout(params) { // 登出
    return FetchSave('/api/logout.json', params)
  }
}
