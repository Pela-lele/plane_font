import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import index from '@/pages/index'
import fxbb from '@/pages/fxbb'
import grxx from '@/pages/grzx/grxx'
import map from '@/pages/map'
import yhzcTel from '@/pages/grzx/yhzcTel'
import yhzcCode from '@/pages/grzx/yhzcCode'
import yhzcType from '@/pages/grzx/yhzcType'

Vue.use(Router)

export default new Router({
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
      path: '/grxx',
      name: 'grxx',
      component: grxx
    },{
      path: '/map',
      name: 'map',
      component: map
    },{
      path: '/yhzcTel',
      name: 'yhzcTel',
      component: yhzcTel
    },{
      path: '/yhzcCode',
      name: 'yhzcCode',
      component: yhzcCode
    },{
      path: '/yhzcType',
      name: 'yhzcType',
      component: yhzcType
    }

  ]
})
