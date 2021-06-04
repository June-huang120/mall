/**
 * Created by Administrator on 2021/5/22.
 */
import {ADD_COUNTER,ADD_TO_CART} from './/mutations-types'
export default{
  //mutations最好只做单一事件
  [ADD_COUNTER](state,payload){
    payload.count += 1
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  }
}