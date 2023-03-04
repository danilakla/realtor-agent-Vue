<template>
  <div class="container-fluid">
<div class="container">
  <div class="body">
<title-block/>
<inform-block/>
  </div>
</div>
  </div>
</template>

<script>
import TitleBlock from "@/components/FirstTitle/TitleBlock";
import InformBlock from "@/components/FirstTitle/InformBlock";
export default {
  name: "IntroduceTitle",
  components: {InformBlock, TitleBlock}
}
</script>

<style scoped>
.container{
padding-top: 100px;
  padding-bottom: 100px;
}
.body{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container-fluid{
  background-color: #FAFAFC;

}
</style>