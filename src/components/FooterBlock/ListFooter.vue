<template>
  <div>
    <h2 :class="$style.titel">{{title}}</h2>
    <item-footer
        v-for="item in items"
        :key="item"
        :item="item"
    />
  </div>
</template>

<script>
import ItemFooter from "@/components/FooterBlock/itemFooter";
export default {
  name: "ListFooter",
  components: {ItemFooter},
  props:{
    items:{
      type:Array,
      required:true
    },
    title:String
  }

}
</script>

<style module>
.titel{
  color: #FF8A63;
  font-size: 14px;
}
</style>