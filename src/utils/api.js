/*
* @Author: baosheng
* @Date:   2018-04-02 22:27:03
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-10 23:31:38
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
  login(params) { // 登录
    console.log(params)
    return FetchSave('/auth/login', params, 'post')
  },
  loginout(params) { // 退出
    return FetchSave('/auth/logout', params, 'post')
  }
}
