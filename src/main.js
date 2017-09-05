// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import MuseUI from 'muse-ui'
//import 'muse-ui/dist/muse-ui.css'
//import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/font/iconfont.css'


Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
