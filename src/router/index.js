import Vue from 'vue'
import Router from 'vue-router'


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
import fxjhAroundList from '@/pages/jdjb/fxjhAroundList'
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

/*无人机管理*/
import wrjgl from '@/pages/wrjgl/wrjgl'
import wrjglDetail from '@/pages/wrjgl/wrjglDetail'
import wrjglAdd from '@/pages/wrjgl/wrjglAdd'
import wrjglProductor from '@/pages/wrjgl/wrjglProductor'
import wrjglType from '@/pages/wrjgl/wrjglType'
import wrjglTip from '@/pages/wrjgl/wrjglTip'
import wrjPicTip from '@/pages/wrjgl/wrjPicTip'




Vue.use(Router)
// 开启debug模式
Vue.config.debug = true;
export default new Router({
  mode: 'history',
  // base: '/plane/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
    	 path: '/fxbb',
      	name: 'fxbb',
        meta:{
          keepAlive: true
        },
      	component: fxbb,
      children:[
        {path:'fxbbDetail',component:fxbbDetail},
      ]
    },
    {
        path: '/tzgg',
        name: 'tzgg',
        component: tzgg,
    },
    {
        path: '/zcggDetail',
        name: 'zcggDetail',
        component: zcggDetail
    },
    {
        path: '/jdjb',
        name: 'jdjb',
        component: jdjb,
      children:[
        {path:'fxbbjb',component:fxbbjb},
        {path:'fxbbjbDetail',component:fxbbjbDetail},
        {path:'fxjhAroundList',component:fxjhAroundList}]
    },{
        path: '/code',
        name: 'code',
        component: code
    },{
      path: '/grxx',
      name: 'grxx',
      component: grxx,
      children:[
        {path:'grxxList',component:grxxList},
        {path:'grxxEditInfo',component:grxxEditInfo},
        {path:'grxxEditPwd',component:grxxEditPwd},
        {path: 'yhzcTel', component: yhzcTel},
        {path: 'yhzcType', component: yhzcType},
        {path: 'yhzcPerson', component: yhzcPerson},
        {path: 'yhzcPersonTip', component: yhzcPersonTip},
        {path: 'yhzcCompany', component: yhzcCompany},
        {path: 'yhzcPwd', component: yhzcPwd},
      ]
    },{
      path: '/map/:type',
      name: 'map',
      meta:{
        keepAlive: true
      },
      component: map
    },{
      path: '/fxzsList',
        name: 'fxzsList',
        meta:{
          keepAlive: true
        },
        component: fxzsList
    },{
      path: '/wrjxhList',
        name: 'wrjxhList',
        meta:{
          keepAlive: true
        },
        component: wrjxhList
    },{
      path: '/fxzs',
      component: fxzs,
      children:[
        {path: 'fxzsDetail', component: fxzsDetail},
        {path: 'fxzsAdd', component: fxzsAdd},
        {path: 'fxzsSelZs', component: fxzsSelZs},
      ]
    },{
      path: '/fxjhList',
      name: 'fxjhList',
      component: fxjhList
    },{
      path: '/wrjgl',
      name: 'wrjgl',
      component: wrjgl,
      children:[
        {path:'wrjglDetail',component:wrjglDetail},
        {path:'wrjglAdd',component:wrjglAdd},
        {path:'wrjglProductor',component:wrjglProductor},
        {path:'wrjglType',component:wrjglType},
        {path:'wrjglTip',component:wrjglTip},
        {path:'wrjglType',component:wrjglType},
        {path:'wrjPicTip',component:wrjPicTip},
      ]
    }
  ]
})
