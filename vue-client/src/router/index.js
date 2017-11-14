import Vue from 'vue'
import Router from 'vue-router'
import Collaborations from '@/components/Collaborations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Collaborations',
      component: Collaborations
    }
  ]
})
