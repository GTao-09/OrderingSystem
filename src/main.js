import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 全局守卫
router.beforeEach((to, from, next) => {
  // 判断是否登录 store.getters.isLogin === false
  if (store.getters.getIslogin === false) {
    if (to.path === '/landing' || to.path === '/registered') {
      next()
    } else {
      alert('未登录')
      next('/landing')
    }
  } else {
    next()
  }
})
