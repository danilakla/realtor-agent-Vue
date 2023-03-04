<template>
<div class="row row-cols-2">
<person-card

    v-motion :initial="{       x: 100,

    opacity: 0,}" :visible="{          x: 0,

    opacity: 1,transition:{duration:1000}}"
    v-for="item in items"
    :item="item"

    :key="item.name"/>
</div>
</template>

<script>
import PersonCard from "@/components/CommonComponentsUI/PersonCard";
export default {
  name: "ListPerson",
  components: {PersonCard},
  props:{
    items:{
      type: Array,
      required: true

    }
  }
}
</script>

<style scoped>
.row{
  margin-left: 200px;
}
</style>