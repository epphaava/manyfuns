<template>
  <div class="post">
    <div class="post_header">
      <div class="user">
        <div class="icon"><img src=""></div>
        <div class="name"></div>
      </div>
      <div class="date"><small></small></div>
    </div>
    <div class="post_image"><img src="" alt=""></div>
    <div class="post_text"></div>
    <div class="thumb">
      <img src="" alt="Thumbs up" />
    </div>
  </div>

</template>
<script>
export default {
    name: "Post",
    data: function(){

         
          return  {
            user: "Juku",
            date: "18.01.2021",
            profile_pic_src: "images/user.png",
            post_pic_src : "images/moon.jpg",
            post_title : "lähen kooli !",
            liked : true
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
    background-color: #E1EFF6;
}
.post_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.user{
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
    font-size:70%;
    font-family: Arial, Helvetica, sans-serif;
}
.post_image img {
    width: 100%;
}
.post_text {
    margin: 3%;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}
.thumb img {
    width: 10%;
    background-color: #97D2FB;
    border-radius: 50%;
    margin: 3%;
}
.thumb img:hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}
</style>