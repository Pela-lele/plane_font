// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import api from "./api"; 
Vue.use(api);

//import MuseUI from 'muse-ui'
//import 'muse-ui/dist/muse-ui.css'
//import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/font/iconfont.css'
import './assets/sass/_base.scss'

import utils from './utils/utils'


import VueI18n from 'vuex-i18n'

Vue.use(VueI18n)


import Vuex from 'vuex'
Vue.use(Vuex)
import vuexI18n from 'vuex-i18n'
var store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})

Vue.use(vuexI18n.plugin, store)
Vue.i18n.set('zh-CN')

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


Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
