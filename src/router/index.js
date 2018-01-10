import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Table from '@/components/Table'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/sys/permissions',
      component: Table
    }
  ]
})
