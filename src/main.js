// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import './utils/validate'

import api from "./api"; 
Vue.use(api);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './assets/font/iconfont.css'
import './assets/sass/_base.scss'

// plugins
import { ConfigPlugin, BusPlugin, DatetimePlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'

Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LocalePlugin)
Vue.use(DatetimePlugin)
Vue.use(BusPlugin)
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})


Vue.config.productionTip = false



router.beforeEach((to, from, next) => {
  // console.log(router);
  if (to.meta.requireAuth){
  	if (store.state.token && store.state.enterType) {  // 通过vuex state获取当前的token是否存在
        next();
    }
    else {
        next({
            path: '/',
            query: {redirect: to.fullPath}
        })
    }
  }else{
  	next()
  }
  // next()
  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
