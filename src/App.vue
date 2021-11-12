<template>
  <div id="app">
       <h1>ManyFuns application for you</h1>
       <my-header></my-header>
  </div>
</template>

<script>
import Header from './components/Header'
  export default {
     components:{
         'my-header':Header
     }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
