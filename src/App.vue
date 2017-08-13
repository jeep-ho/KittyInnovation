<template>
  <div id="app">
    <header>
      <router-link to="/Loading" @onclick="goto('1')">
        加载
      </router-link> |
      <router-link to="/Hello" @click="goto('2')">
        哈喽
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goto: function (val) {
      switch (val) {
      case '1':
        this.$router.push({ path: 'Loading' })
        break
      case '2':
        this.$router.push({ path: 'Hello' })
        break
      }
    }
  }
}

</script>

<style>
html,
body {
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
  text-align: center;
  margin: 0 auto;
}
</style>
