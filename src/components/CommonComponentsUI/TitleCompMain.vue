<template>

  <div :class="$style.context" v-motion :initial="{  y: 100,
    opacity: 0,}" :visible="{    y: 0,
    opacity: 1,transition:{duration:1000}}">
  <h1 :class="$style.title">Our requirements</h1>
  <h2 :class="$style['sub-title']">How we choose our listings.</h2>
  <p :class="$style.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Nullam scelerisque aliquam odio et faucibus.</p>
  </div>
</template>

<script>
export default  {
  name: "TitleCompMain"
}
</script>

<style module>
.context{
  padding-bottom: 100px;
}
.title{
  color: #FF8A63;
  font-size: 14px;

}
.sub-title{
  font-size: 36px;
}
.text{
  font-size: 18px;
}
</style>