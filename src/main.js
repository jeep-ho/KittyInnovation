// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hello from './components/Hello'
import Loading from './components/Loading'

Vue.config.productionTip = false
const routes = [{
  path: '/Loading',
  component: Loading
}, {
  path: '/Hello',
  component: Hello
}]
router.addRoutes(routes)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
