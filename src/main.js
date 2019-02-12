/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer.js'  // 加载mockServer即可
import './filters'  // 加载filter过滤器
import loading from './common/imgs/loading.gif'

// 注册全局组件标签
Vue.component(Button.name,Button) // 使<mt-button>可以全局使用
Vue.use(VueLazyload,{  // 内部注册一个lazy指令（v-lazy）
  loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,  // 使用vue-router
  store  // 使用vuex
})
