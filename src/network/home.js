/**
 * Created by Administrator on 2021/5/13.
 */
import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}