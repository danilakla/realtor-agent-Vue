<template>
<div class="container">
<title-comp-main/>
  <div class="body">
<body-inro/>
  </div>

</div>

</template>

<script>
import BodyInro from "@/components/SecondInro/BodyInro";
import TitleCompMain from "@/components/CommonComponentsUI/TitleCompMain";
export default {
  name: "MainIntro",
  components: {TitleCompMain, BodyInro}
}
</script>

<style scoped>
.container{
  padding-top: 100px;
  padding-bottom: 100px;
}
h1{
  color: #FF8A63;
  font-size: 14px;

}
h2{
  font-size: 36px;
}
p{
  font-size: 18px;
}
</style>