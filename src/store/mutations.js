/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  SEARCH_SHOP_LIST
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  },

  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },

  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){
      Vue.set(food,'count',1)  // 通过vue中的set()方法给新增的数据增加数据绑定效果，否则不会有数据绑定的效果
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    // 移除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    // 清空购物车中的所有food
    state.cartFoods = []
  },

  [SEARCH_SHOP_LIST](state,{searchShops}){
    state.searchShops = searchShops
  }
}
