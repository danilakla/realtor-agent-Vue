<template>
  <div class="container-fluid bck" v-motion :initial="{opacity:0 ,scale:0.9}" :visible="{opacity: 1, scale:1, transition:{duration:2000}}">




  </div>
</template>

<script>
export default {
  name: "BckComp"
}
</script>

<style scoped>
.bck{
  background-image: url("../assets/img_4.png");

  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

}


</style>