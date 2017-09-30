import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vuex-i18n'

import mutations from './mutations'

Vue.use(Vuex)
Vue.use(VueI18n)



const state = {
  user:null,
  enterType:"",//用户类型，（游客，个人，企业）
  token:"11",
  fxbbForm:{
      licenseList:[],//飞行证书
      droneList:[],//无人机
      flightArea: null,//飞行区域
      flightStartLocation: null,//起飞点
      flightEndLocation: null//降落点
  },
  //无人机管理
  wrjgl:{
	  choosePro:"",//选择添加的无人机的厂商
    parentId:"",//选择的无人机的厂商对应的Id
    chooseType:"",//选择添加的无人机的型号
    droneId:"",//选择添加的无人机的型号对应的Id
  },
  //证书管理
  fxzsgl:{
	  chooseZs:"",//选择添加的证书类型
    licenseMId:""//对应的下发部门Id
  }
}
var store =  new Vuex.Store({
	i18n: VueI18n.store,
	state,
	// getters,
	// actions,
	mutations
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
Vue.use(VueI18n.plugin, store)
Vue.i18n.set('zh-CN')
export default store
