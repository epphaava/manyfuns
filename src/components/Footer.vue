<template>
  <v-footer>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>ManyFuns</strong>
    </v-col>
    <v-col>
      <router-link :to="{ name: 'contact' }">Contact us</router-link> |
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
  background-color: rgb(201, 211, 231);
  padding: 4px;
}
a {
    font-weight: bold;
    color: #03090f;

    &.router-link-exact-active {
      color: #415d81;
    }
  }
</style>
