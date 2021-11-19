<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>We are so many funs!</p>
    <img id="fun" src="@/assets/fun.png" alt="serious fun">
  </div>
</template>

<style lang="scss">
.about {
  min-height:70vh;
  background-color: white;
  padding: 5%;
  h1 {
  font-size: 350%;
  color: #3b5b7a;
}
}
#fun{
  padding-top: 2%;
  max-width: 50%;
}
p {
  font-size: 120%;
}

</style>
