/**
 * Created by Administrator on 2021/5/11.
 */
import axios from 'axios'

export function request(config){

  //1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //非全局 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  },error => {
    console.log(error);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  },error => {
    console.log(error);
  })

  //3.发送真正的网络请求
  return instance(config)
}
