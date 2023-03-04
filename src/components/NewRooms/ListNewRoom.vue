<template>
  <div :class="$style.content">
    <new-room-card
        v-for="(item,i) in items"
        :item="item"

        v-motion
        :initial="{
          x: i!=1? (i==0? -200 : 200) : 0,
          y:(i==1)?200:0,
          scale:0.5,


    opacity: 0,}"
        :visible="{
                    scale:1,

          x: 0,
          y:0,
    opacity: 1,transition:{duration:1000}}"
        :key="item.title"
    />
  </div>
</template>

<script>
import NewRoomCard from "@/components/NewRooms/NewRoomCard";
export default {
  name: "ListNewRoom",
  components: {NewRoomCard},
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
}
</style>