<template>
  <div>

<div id="page" v-for="item in this.postList" :key="item.id">
    <funpost v-bind:user="item.user"
             v-bind:date="item.date"
             v-bind:profile_pic_src="item.profile_pic_src"
             v-bind:post_pic_src="item.post_pic_src"
             v-bind:post_title="item.post_title"
             v-bind:liked="item.liked">
    </funpost>
</div>

  </div>
</template>


<script>
import  funpost  from "./FunPost.vue";


export default {
    name:'posts-page',
    components:{
      funpost
    },

 
     data: function(){
      return {

        
        
      }
    },

    computed: {
        postList(){return this.$store.getters.getPostList}
    }

}
</script>

<style>
#page{
  display: flex;
  justify-content: center;
}
</style>