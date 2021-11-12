<template>
  <v-footer>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>ManyFuns</strong>
    </v-col>
    <v-col>
      <router-link :to="{ name: 'contact' }">Contact us</router-link>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
v-footer {
  display: flex;
  justify-content: space-around;
  background-color: rgb(194, 203, 212);
  padding: 1%;
}
a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #376eb6;
    }
  }
</style>
