<template>
  <div :class="$style.content">
<item-component
    v-for="item in items"
      :item="item"

      :key="item.name"
  />
  </div>
</template>

<script>
import ItemComponent from "@/components/SecondInro/ItemComponent";
export default {
  name: "ItemList",
  components: {ItemComponent},
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
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
</style>