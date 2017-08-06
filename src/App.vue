<template>
  <div id="app">
    <p>
      <router-link to="/Loding">
      加载
     </router-link> | 
     <router-link to="/Hello">
     哈喽
     </router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from './components/Loading'
import Hello from './components/Hello'
import VueRouter from 'vue-router'
const routers = [
  { path: '/Loding', compents: Loading },
  { path: '/Hello', compents: Hello }
]
const router = new VueRouter({
  routers
})
// const app=new Vue({
//   router
// }).$mount('#app')

export default {
  name: 'app',
  router: router
}
</script>

<style>
html,body {
  background-color: #D35400;
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 70px;
  height: 100%;
  text-align:center;
  margin: 0 auto;
}
</style>
