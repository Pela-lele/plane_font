import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import index from '@/pages/index'
import fxbb from '@/pages/fxbb'
import grxx from '@/pages/grxx'
import map from '@/pages/map'

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
    }
  ]
})
