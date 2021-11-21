<template>
  <div>
    <div class="refresh">
      <button class="refreshButton" v-on:click="resetLikes">Refresh</button>
    </div>
    <div id="page" v-for="item in this.postList" :key="item.id">
      <funpost
        v-bind:id="item.id"
        v-bind:user="item.user"
        v-bind:date="item.date"
        v-bind:profile_pic_src="item.profile_pic_src"
        v-bind:post_pic_src="item.post_pic_src"
        v-bind:post_title="item.post_title"
        v-bind:likes="item.likes"
      >
      </funpost>
    </div>
  </div>
</template>

<script>
import funpost from "./FunPost.vue";

export default {
  name: "posts-page",
  components: {
    funpost,
  },

  data: function () {
    return {};
  },

  computed: {
    postList() {
      return this.$store.getters.getPostList;
    },
  },

  methods: {
    resetLikes() {
      this.$store.dispatch("ResetLikesAct");
    },
  },
};
</script>

<style>
#page {
  display: flex;
  justify-content: center;
}

.refresh {
  padding-bottom: 20px;
}
.refreshButton:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}

.refreshButton {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  font-weight: bold;
  background-color: aliceblue;
  width: 135px;
  height: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  border: none;
}
</style>
