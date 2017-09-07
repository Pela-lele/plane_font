import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import index from '@/pages/index'
import fxbb from '@/pages/fxbb'
import grxx from '@/pages/grzx/grxx'
import map from '@/pages/map'
import yhzcTel from '@/pages/grzx/yhzcTel'
import yhzcType from '@/pages/grzx/yhzcType'
import yhzcPerson from '@/pages/grzx/yhzcPerson'
import yhzcPersonTip from '@/pages/grzx/yhzcPersonTip'
import yhzcCompany from '@/pages/grzx/yhzcCompany'
import yhzcPwd from '@/pages/grzx/yhzcPwd'

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
    }

  ]
})
