import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'




import index from '@/pages/index'

/*飞行报备*/
import fxbb from '@/pages/fxbb/fxbb'
import fxbbDetail from '@/pages/fxbb/fxbbDetail'
import map from '@/pages/fxbb/map'
import fxzsList from '@/pages/fxbb/fxzsList'
import wrjxhList from '@/pages/fxbb/wrjxhList'
/*通知公告*/
import tzgg from '@/pages/tzgg/tzgg'
import zcggDetail from '@/pages/tzgg/zcggDetail'

/*监督举报*/
import jdjb from '@/pages/jdjb/jdjb'
import fxbbjb from '@/pages/jdjb/fxbbjb'
import fxbbjbDetail from '@/pages/jdjb/fxbbjbDetail'

/*二维码*/
import code from '@/pages/code'
/*个人信息*/
import grxx from '@/pages/grzx/grxx'
import grxxList from '@/pages/grzx/grxxList'
import grxxEditInfo from '@/pages/grzx/grxxEditInfo'
import grxxEditPwd from '@/pages/grzx/grxxEditPwd'
/*用户注册*/
import yhzcTel from '@/pages/grzx/yhzcTel'
import yhzcType from '@/pages/grzx/yhzcType'
import yhzcPerson from '@/pages/grzx/yhzcPerson'
import yhzcPersonTip from '@/pages/grzx/yhzcPersonTip'
import yhzcCompany from '@/pages/grzx/yhzcCompany'
import yhzcPwd from '@/pages/grzx/yhzcPwd'
/*飞行证书管理*/
import fxzs from '@/pages/fxzs/fxzs'
import fxzsAdd from '@/pages/fxzs/fxzsAdd'
import fxzsSelZs from '@/pages/fxzs/fxzsSelZs'
import fxzsDetail from '@/pages/fxzs/fxzsDetail'
/*飞行计划列表*/
import fxjhList from '@/pages/fxjh/fxjhList'
/*周围的飞行计划列表*/
import fxjhAroundList from '@/pages/fxjh/fxjhAroundList'
/*无人机管理*/
import wrjgl from '@/pages/wrjgl/wrjgl'
import wrjglDetail from '@/pages/wrjgl/wrjglDetail'
import wrjglAdd from '@/pages/wrjgl/wrjglAdd'
import wrjglProductor from '@/pages/wrjgl/wrjglProductor'
import wrjglType from '@/pages/wrjgl/wrjglType'
import wrjglTip from '@/pages/wrjgl/wrjglTip'
import wrjPicTip from '@/pages/wrjgl/wrjPicTip'





Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/plane/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
    	 path: '/fxbb',
      	name: 'fxbb',
      	component: fxbb
    },{
       path: '/fxbbDetail',
        name: 'fxbbDetail',
        component: fxbbDetail
    },{
        path: '/tzgg',
        name: 'tzgg',
        component: tzgg
    },{
        path: '/zcggDetail',
        name: 'zcggDetail',
        component: zcggDetail
    },{
        path: '/jdjb',
        name: 'jdjb',
        component: jdjb
    },{
        path: '/fxbbjb',
        name: 'fxbbjb',
        component: fxbbjb
    },{
      path: '/fxbbjbDetail',
      name: 'fxbbjbDetail',
      component: fxbbjbDetail
    },{
        path: '/code',
        name: 'code',
        component: code
    },{
      path: '/grxx',
      name: 'grxx',
      component: grxx
    },{
      path: '/grxxList',
      name: 'grxxList',
      component: grxxList
    },{
      path: '/map/:type',
      name: 'map',
      component: map
    },{
      path: '/fxzsList',
        name: 'fxzsList',
        component: fxzsList
    },{
      path: '/fxjhAroundList',
      name: 'fxjhAroundList',
      component: fxjhAroundList
    },{
      path: '/wrjxhList',
        name: 'wrjxhList',
        component: wrjxhList
    },{
      path: '/yhzcTel',
      name: 'yhzcTel',
      component: yhzcTel
    },{
      path: '/yhzcType',
      name: 'yhzcType',
      component: yhzcType
    },{
      path: '/yhzcPerson',
      name: 'yhzcPerson',
      component: yhzcPerson
    },{
      path: '/yhzcPersonTip',
      name: 'yhzcPersonTip',
      component: yhzcPersonTip
    },{
      path: '/yhzcCompany',
      name: 'yhzcCompany',
      component: yhzcCompany
    },{
      path: '/yhzcPwd',
      name: 'yhzcPwd',
      component: yhzcPwd
    },{
      path: '/grxxEditInfo',
      name: 'grxxEditInfo',
      component: grxxEditInfo
    },{
      path: '/grxxEditPwd',
      name: 'grxxEditPwd',
      component: grxxEditPwd
    },{
      path: '/fxzs',
      name: 'fxzs',
      component: fxzs
    },{
      path: '/fxzsAdd',
      name: 'fxzsAdd',
      component: fxzsAdd
    },{
      path: '/fxzsSelZs',
      name: 'fxzsSelZs',
      component: fxzsSelZs
    },{
      path: '/fxzsDetail',
      name: 'fxzsDetail',
      component: fxzsDetail
    },{
      path: '/fxjhList',
      name: 'fxjhList',
      component: fxjhList
    },{
      path: '/wrjgl',
      name: 'wrjgl',
      component: wrjgl
    },{
      path: '/wrjglDetail',
      name: 'wrjglDetail',
      component: wrjglDetail
    },{
      path: '/wrjglAdd',
      name: 'wrjglAdd',
      component: wrjglAdd
    },{
      path: '/wrjglProductor',
      name: 'wrjglProductor',
      component: wrjglProductor
    },{
      path: '/wrjglType',
      name: 'wrjglType',
      component: wrjglType
    },{
      path: '/wrjglTip',
      name: 'wrjglTip',
      component: wrjglTip
    },{
      path: '/wrjPicTip',
      name: 'wrjPicTip',
      component: wrjPicTip
    },


  ]
})
