import Vue from "vue";
import Vuex from "vuex";
import posts from "/posts.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: posts,
  },
  mutations: {
    AddLikeMut(state, id) {
      state.postList.posts[id.id].likes++



    },

    ResetLikesMut(state) {
      state.postList.posts.forEach(element => {
        element.likes = 0;
      });



    },


  },
  actions: {
    AddLikeAct: (act, id) => {

      act.commit('AddLikeMut', id)

    },

    ResetLikesAct: (act) => {

      act.commit('ResetLikesMut')

    }


  },
  getters: {
    getPostList: state => {
      let id = -1;
      let postList = state.postList.posts
      let altered = postList.map(post => {
        id++;
        return {
          id: id,
          user: post.user,
          date: post.date,
          profile_pic_src: post.profile_pic_src,
          post_pic_src: post.post_pic_src,
          post_title: post.post_title,
          likes: post.likes,
        };
      })

      //console.log(altered);


      return altered



    }
  },

  modules: {},
});
