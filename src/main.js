// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
//初始化显示统一，（不同浏览器初始样式不同）
import './assets/styles/reset.css'
//1像素边框解决方案，（部分多倍屏显示会把边框翻倍）
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同的内容给用户
