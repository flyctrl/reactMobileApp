/*
* @Author: baosheng
* @Date:   2018-04-02 22:28:51
* @Last Modified by:   chengbs
* @Last Modified time: 2018-06-12 00:20:33
*/
import storage from '../utils/storage'
import axios from 'axios'
import { baseUrl } from './index'

let fetcher = axios.create({
  baseURL: baseUrl,
  withCredentials: 'include',
  transformRequest: [function (data) {
    return data
  }],
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

fetcher.interceptors.request.use(function (config) {
  const Authorization = storage.get('Authorization')
  if (Authorization) {
    config.headers.Authorization = Authorization
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

fetcher.interceptors.response.use(function (response) {
  if (response.data.code === 89001 || response.data.code === 81001) {
    location.href = '/login'
  }
  return response.data
}, function (error) {
  if (error && error.response) { // 这里是返回状态码不为200时候的错误处理
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        break

      case 401:
        error.message = '未授权，请登录'
        break

      case 403:
        error.message = '拒绝访问'
        break

      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break

      case 408:
        error.message = '请求超时'
        break

      case 500:
        error.message = '服务器内部错误'
        break

      case 501:
        error.message = '服务未实现'
        break

      case 502:
        error.message = '网关错误'
        break

      case 503:
        error.message = '服务不可用'
        break

      case 504:
        error.message = '网关超时'
        break

      case 505:
        error.message = 'HTTP版本不受支持'
        break

      default:
        error.message = error.response.status + '错误'
    }
  }
  return Promise.reject(error)
})

export default fetcher
