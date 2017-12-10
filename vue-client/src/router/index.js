import Vue from 'vue'
import Router from 'vue-router'
import Collaboration from '@/components/Collaboration'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collaboration/:id',
      name: 'collaboration',
      component: Collaboration,
      props: true
    }
  ]
})
