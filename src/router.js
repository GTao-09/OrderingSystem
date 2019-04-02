import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import Menu from './pages/Menu.vue'
import Management from './pages/Management.vue'
import About from './pages/About/About.vue'
import Landing from './pages/Landing.vue'
import Registered from './pages/Registered.vue'

// 二级路由
import History from './pages/About/content/History.vue'
import Contact from './pages/About/content/Contact.vue'
import Delivert from './pages/About/content/Delivery.vue'
import OrderingGuide from './pages/About/content/OrderingGuide.vue'

// 三级路由
import Phone from './pages/About/content/contact/Phone.vue'
import PersonName from './pages/About/content/contact/PersonName.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
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
      component: About,
      children: [
        { path: '/about/history', name: 'HistoryLink', component: History },
        { path: '/about/contact',
          name: 'ContactLink',
          component: Contact,
          children: [
            { path: '/phone', name: 'PhoneLink', component: Phone },
            { path: '/personName', name: 'PersonNameLink', component: PersonName }
          ],
          redirect: '/phone'
        },
        { path: '/about/delivert', name: 'DelivertLink', component: Delivert },
        { path: '/about/orderingGuide', name: 'OrderingGuideLink', component: OrderingGuide }
      ],
      redirect: '/about/contact'
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
      path: '/',
      redirect: '/landing'
    },
    {
      path: '*',
      redirect: '/landing'
    }
  ]
})
