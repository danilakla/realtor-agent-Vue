<template>
<div :class="$style['list-reat']">

<reat-item v-for="item in items"
:direction-slide="direct"
           :direction-slid-left="directLeft"
:item="item"
           :key="item.title"
/>

</div>
</template>

<script>
import ReatItem from "@/components/ReatingBlock/ReatItem";
export default {
  name: "ListReating",
  components: {ReatItem},
  props:{
    direct:Boolean,
    directLeft:Boolean,

    countClick:Number,
    items:{
      required:true,
      type:Array
    }
  }
}
</script>

<style module>
.list-reat{

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>