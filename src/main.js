import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // 判断是否登录 store.getters.isLogin === false
//   if (to.path === '/landing' || to.path === '/registered') {
//     next()
//   } else {
//     alert('未登录')
//     next('/landing')
//   }
// })
