// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
//vuex
import store from './store'
//引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
//初始化显示统一，（不同浏览器初始样式不同）
import 'styles/reset.css'
//1像素边框解决方案，（部分多倍屏显示会把边框翻倍）
import 'styles/border.css'
//引入iconfonts
import 'styles/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同的内容给用户
