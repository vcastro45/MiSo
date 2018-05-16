import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: Home
    },
    {
      path: '/expertises',
      name: 'expertises',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Home
    }
  ]
})
