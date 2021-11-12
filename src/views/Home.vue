<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.home {
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  padding-top: 2.5%;
}
</style>
