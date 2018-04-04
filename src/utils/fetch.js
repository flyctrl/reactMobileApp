/*
* @Author: baosheng
* @Date:   2018-04-02 22:28:51
* @Last Modified by:   baosheng
* @Last Modified time: 2018-04-02 22:32:51
*/
import storage from '../utils/storage'
import axios from 'axios'
import { baseUrl } from './index'

let fetcher = axios.create({
  method: 'post',
  baseURL: baseUrl,
  withCredentials: true,
  transformRequest: [function (data) {
    const userInfo = storage.get('user')
    if (userInfo && data && !data.NOUSERINFO) {
      data.userName = userInfo.userName
      data.accessToken = userInfo.accessToken
    }
    return JSON.stringify(data)
  }],
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

fetcher.interceptors.request.use(function (config) {
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
  return Promise.reject(error)
})

export default fetcher.post
