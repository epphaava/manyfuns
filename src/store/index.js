import Vue from "vue";
import Vuex from "vuex";
import posts from "/posts.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: posts,
  },
  mutations: {},
  actions: {},
  getters: {
    getPostList: state => {
      let id = -1;
      let postList = state.postList.posts
      let altered = postList.map(post => {
        id++;
        return {
          id:id,
          user: post.user,
          date: post.date,
          profile_pic_src: post.profile_pic_src,
          post_pic_src: post.post_pic_src,
          post_title: post.post_title,
          liked: post.liked

        }
      })

      console.log(altered);


      return altered


      
    }
  },

  modules: {},
});
