/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//路由组件懒加载，适用于外层顶级路由，将路由组件写成函数，按需加载请求，避免第一次请求加载资源过大
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 配置所有路由
  routes:[
    {
      path:'/msite',
      component:MSite,  //返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径才会执行
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings,
        },
        {
          path:'/shop/info',
          component:ShopInfo,
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }
  ]
})
