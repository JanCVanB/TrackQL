import Vue from 'vue'
import Router from 'vue-router'
import Collaboration from '@/components/Collaboration'
import Collaborations from '@/components/Collaborations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'collaborations',
      component: Collaborations
    },
    {
      path: '/collaboration/:id',
      name: 'collaboration',
      component: Collaboration,
      props: true
    }
  ]
})
