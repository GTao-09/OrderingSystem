import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import Menu from './pages/Menu.vue'
import Management from './pages/Management.vue'
import About from './pages/About/About.vue'
import Landing from './pages/Landing.vue'
import Registered from './pages/Registered.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/menu',
      name: 'MenuLink',
      component: Menu
    },
    {
      path: '/management',
      name: 'ManagementLink',
      component: Management
    },
    {
      path: '/about',
      name: 'AboutLink',
      component: About
    },
    {
      path: '/landing',
      name: 'LandingLink',
      component: Landing
    },
    {
      path: '/registered',
      name: 'RegisteredLink',
      component: Registered
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
