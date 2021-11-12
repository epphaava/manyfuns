<template>
  <div id="app">
    <my-header></my-header>
    <my-footer></my-footer>
    <h1>ManyFuns application for you</h1>
    
  </div>
</template>

<script>
import header from "./components/Header";
import footer from "./components/Footer";

export default {
  components: {
    'my-header': header,
    'my-footer': footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34495e;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default{
  name: 'app',
}
</script>

