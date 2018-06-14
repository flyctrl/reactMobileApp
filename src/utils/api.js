/*
* @Author: baosheng
* @Date:   2018-04-02 22:27:03
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-10 23:31:38
*/
import fetch from 'Util/fetch'
import { Toast } from 'antd-mobile'

// 获取数据类接口
export const Fetch = (url, params, method = 'post', config) => {
  if (method === 'get') {
    params = { params, ...config }
    config = {}
  }
  return fetch[method](url, params, config).then((res) => {
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
export const FetchSave = (url, params, method = 'post', config) => {
  if (method === 'get') {
    params = { params, ...config }
    config = {}
  }
  return fetch[method](url, params, config).then((res) => {
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
  auth: {
    login(params) { // 登录
      return Fetch('/auth/login', params)
    },
    register(params) { // 注册
      return Fetch('/auth/register', params)
    },
    loginout(params) { // 退出
      return Fetch('/auth/logout', params)
    }
  },
  Mine: { // 我的
    Personaldara: { // 编辑个人资料
      avatar(params) { // 上传用户头像
        console.log(params)
        return Fetch('/users/avatar', params, 'post', { 'Content-Type': 'multipart/form-data' })
      },
      edit(params) { // 修改用户资料
        return Fetch('/users/avatar', params, 'post')
      },
    }
  }
}
