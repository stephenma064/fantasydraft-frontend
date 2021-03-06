import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Join from '@/components/Join'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
