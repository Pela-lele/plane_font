import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import index from '@/pages/index'
import fxbb from '@/pages/fxbb'
import grxx from '@/pages/grzx/grxx'
import map from '@/pages/map'
import fxzsList from '@/pages/fxzsList'
import yhzcTel from '@/pages/grzx/yhzcTel'
import yhzcType from '@/pages/grzx/yhzcType'
import yhzcPerson from '@/pages/grzx/yhzcPerson'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/fxzsList',
        name: 'fxzsList',
        component: fxzsList
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
    }

  ]
})
