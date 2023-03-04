<template>
  <div>
    <h2 :class="$style.title">
      Our goal
    </h2>
    <p :class="$style['sub-title']">
      We are dedicated <br> to finding a house <br> that you'll love.
    </p>
  </div>

</template>

<script>
export default {
  name: "TitleBlock"
}
</script>

<style module>
.title{
  text-align: left;
  color: #FF8A63;
  font-size: 20px;
}
.sub-title{
  text-align: left;
  font-size: 48px;
}
</style>