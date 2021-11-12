<template>
  <div class="post">
    <div class="post_header">
      <div class="user">
        <div class="icon"><img src="" /></div>
        <div class="name">{{user}}</div>
      </div>
      <div class="date"><small>{{date}}</small></div>
    </div>
    <div class="post_image"><img :src="require(post_pic_src)" alt="" /></div>
    <div class="post_text">{{post_title}}</div>
    <div class="thumb">
      <img src="" alt="Thumbs up" />
    </div>
  </div>
</template>
<script>
export default {
    name: "fun-post",
    props : ["user","date","profile_pic_src","post_pic_src","post_title","liked"],
    data: function(){

         
          return  {
           
        };
        
    }
};
</script>
<style>
.post {
  display: flex;
  margin-bottom: 2%;
  width: 70%;
  flex-direction: column;
  align-content: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  border-radius: 1%;
  background-color: rgb(229, 236, 243);
}
.post_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user {
  float: left;
  display: flex;
  align-items: center;
}
.icon img {
  margin: 10px;
  float: left;
  width: 25px;
  padding: 2px;
  display: block;
  border-radius: 50%;
}
.icon img:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}
.date {
  float: right;
  margin: 2%;
}
.date small {
  font-size: 70%;
  font-family: Arial, Helvetica, sans-serif;
}
.post_image img {
  width: 100%;
}
.post_text {
  margin: 3%;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
.thumb img {
  width: 10%;
  background-color: #97d2fb;
  border-radius: 50%;
  margin: 3%;
}
.thumb img:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}
</style>