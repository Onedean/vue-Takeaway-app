/*
包含多个基于state的getter计算属性的对象
 */
export default {
  totalCount(state){
    return state.cartFoods.reduce((pretotal,food) => pretotal + food.count,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((pretotal,food) => pretotal + food.count * food.price,0)
  },
  positiveSize(state){
    return state.ratings.reduce((pretotal,rating) => pretotal + !rating.rateType,0)
  }
}
