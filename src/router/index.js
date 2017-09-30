import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import first from '@/pages/first'

/*飞行报备*/
import fxbb from '@/pages/fxbb/fxbb'
import fxbbEdit from '@/pages/fxbb/fxbbEdit'
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
import fxzsDetailEdit from '@/pages/fxzs/fxzsDetailEdit'
/*飞行计划*/
import fxjhList from '@/pages/fxjh/fxjhList'
import fxbbDetail from '@/pages/fxjh/fxbbDetail'
import mapShow from '@/pages/fxjh/map'
/*周围的飞行计划列表*/

/*无人机管理*/
import wrjgl from '@/pages/wrjgl/wrjgl'
import wrjglDetail from '@/pages/wrjgl/wrjglDetail'
import wrjglAdd from '@/pages/wrjgl/wrjglAdd'
import wrjglProductor from '@/pages/wrjgl/wrjglProductor'
import wrjglType from '@/pages/wrjgl/wrjglType'
import wrjglTip from '@/pages/wrjgl/wrjglTip'
import wrjPicTip from '@/pages/wrjgl/wrjPicTip'
import wrjglDetailEdit from '@/pages/wrjgl/wrjglDetailEdit'





Vue.use(Router)
// 开启debug模式
Vue.config.debug = true;

var router = new Router({
  // mode: 'history',

  //keepAlive: true    requireAuth: true
  routes: [
    {
      path: '/index',
      name: 'index',
      meta: {
        requireAuth: true  // 路由是否需要登录
      },
      component: index
    },
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
       path: '/fxbb',
        name: 'fxbb',
        meta:{
          requireAuth: true
        },
        component: fxbb,
      children:[
        {path:'fxzsList',component:fxzsList},
        {path:'wrjxhList',component:wrjxhList},
        {path:'map',component:map}
      ]
    },
    {
      path: '/fxbbEdit',
        name: 'fxbbEdit',
        meta:{
          requireAuth: true
        },
        component: fxbbEdit,
      children:[
        {path:'fxzsList',component:fxzsList},
        {path:'wrjxhList',component:wrjxhList},
        {path:'map',component:map}
      ]
    },
    {
        path: '/tzgg',
        name: 'tzgg',
        meta:{
          requireAuth: true
        },
        component: tzgg,
    },
    {
        path: '/zcggDetail',
        name: 'zcggDetail',
        meta:{
          requireAuth: true
        },
        component: zcggDetail
    },
    {
        path: '/jdjb',
        name: 'jdjb',
        meta:{
          requireAuth: true
        },
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
      path: '/fxzs',
      component: fxzs,
      children:[
        {
          path: 'fxzsDetail/:licenseId',
          component: fxzsDetail,
        },
        {
          path: 'fxzsAdd',
          component: fxzsAdd,
          children:[
            {path: 'fxzsSelZs', component: fxzsSelZs}
          ]
        },
        {
          path:'fxzsDetailEdit',
          component:fxzsDetailEdit,
          children:[
            {path: 'fxzsSelZs', component: fxzsSelZs}
          ]
        }

      ]
    },{
      path: '/fxjhList',
      name: 'fxjhList',
      component: fxjhList,
      children:[
        {path:'fxbbDetail',component:fxbbDetail,children:[{path:'mapShow',component:mapShow}]},

      ]
    },{
      path: '/wrjgl',
      name: 'wrjgl',
      component: wrjgl,
      children:[
        {path:'wrjglDetail/:droneId',component:wrjglDetail},
        {
          path:'wrjglAdd',
          component:wrjglAdd,
          children:[
            {path:'wrjglProductor',component:wrjglProductor},
            {path:'wrjglType',component:wrjglType}
          ]
        },
        // {path:'wrjglProductor',component:wrjglProductor},
        // {path:'wrjglType',component:wrjglType},
        {path:'wrjglTip',component:wrjglTip},
        {path:'wrjglType',component:wrjglType},
        {path:'wrjPicTip',component:wrjPicTip},
        {
          path:'wrjglDetailEdit',
          component:wrjglDetailEdit,
          children:[
            {path:'wrjglProductor',component:wrjglProductor},
            {path:'wrjglType',component:wrjglType}
          ]
        }
      ]
    },

  ]
})


export default router
