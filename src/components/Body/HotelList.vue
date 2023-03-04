<template>
  <div :class="$style.content">
    <hotel-item
        v-for="item in items"
        :item="item"

        :key="item.title"
    />
  </div>
</template>

<script>
import HotelItem from "@/components/Body/HotelItem";
export default {
  name: "HotelList",
  components: {HotelItem},
  props:{
    items:{
      type: Array,
      required: true

    }
  }
}
</script>

<style module>
.content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>