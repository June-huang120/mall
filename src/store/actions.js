/**
 * Created by Administrator on 2021/5/22.
 */
import {ADD_COUNTER,ADD_TO_CART} from './/mutations-types'
export default {
  addCart(context,payload){

    return new Promise((resolve, reject) => {
      // let oldproduct = state.cartList.find(function (item) {
      //   return item.id === payload.id
      // })
      let oldproduct = context.state.cartList.find(item => {return item.id === payload.id})

      if(oldproduct){
        context.commit(ADD_COUNTER,oldproduct)
        resolve('商品数量+1')
      }else{
        context.commit(ADD_TO_CART,payload)
        resolve('添加了新商品')
      }
    })

  }
}