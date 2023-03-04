<template>
    <div :class="$style.item">
      <img src="../assets/img.png" alt="">
      <h1 :class="$style.title">Estate</h1>
      <p :class="$style['sub-title']">We're here to help you find a <br> new home.</p>
    </div>


</template>

<script>
export default {
  name: "MainTitleComonent"
}
</script>

<style module>
.item{
  margin-top: 300px;
  color: #45525B;
  animation: 2s ease-in-out 0s  alternate sun-rise;

}
@keyframes sun-rise {
  from {
    /* pushes the sun down past the viewport */
    transform: translateY(100px);
  }
  to {
    /* returns the sun to its default position */
    transform: translateY(0);
  }
}
.title  {
  margin-top: 20px;
  font-weight: bolder;
  font-size: 32px;
}
.sub-title{
  font-size: 32px;
}
</style>