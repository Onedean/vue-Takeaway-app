/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer.js'

// 注册全局组件标签
Vue.component(Button.name,Button) // 使<mt-button>可以全局使用

new Vue({
  el:'#app',
  render:h => h(App),
  router,  // 使用vue-router
  store  // 使用vuex
})
