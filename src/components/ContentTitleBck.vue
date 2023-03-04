<template>
  <div class="container-fluid bck">
        <main-title-comonent/>
    <a :href="'#thirdBlock'" style="position: relative; z-index: 100000">
      <circle-button content="↓" />
    </a>
  </div>


</template>

<script>
import MainTitleComonent from "@/components/MainTitleComonent";
import CircleButton from "@/components/CustomUI/CircleButton";
export default {
  name: "ContentTitleBck",
  components: {CircleButton, MainTitleComonent}
}
</script>

<style scoped>
a{
  margin-top: 100px;
}

.bck{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
background-image: url("../assets/img_1.png");
  background-color: hsla(0,0%,100%,0.70);
  background-blend-mode: overlay;





  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>