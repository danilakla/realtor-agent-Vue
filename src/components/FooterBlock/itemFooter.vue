<template>

  <p :class="$style.text">{{item}}</p>
</template>

<script>
export default {
  name: "itemFooter",
  props:{
    item:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style module>
.text{
  color: white;
  font-size: 16px;
}
</style>