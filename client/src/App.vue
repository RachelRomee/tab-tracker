<template>
  <div id="app">
    <!-- <Hello msg="Welcome to Your Vue.js App"/> -->
    <Register msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    Hello,
	Register
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
