<template>
  <nav>
    <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'contact' }">Contact us</router-link> |
    </div>
    <router-view />
  </nav>
</template>

<script>
export default {

  name:'my-header'
};
</script>

<style lang="scss">
.links {
  padding: 1.5%;
}
nav {
  background-color: rgb(229, 236, 243);
  padding: 0% 10% 0% 10%;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #376eb6;
    }
  }
}
</style>
