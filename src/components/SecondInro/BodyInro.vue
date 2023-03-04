<template>
  <div :class="$style.body" >
    <img :class="$style['person-img']"
         v-motion :initial="{    scale: 0,
    opacity: 0,}" :visible="{      scale: 1,
    opacity: 1,transition:{duration:1000}}"
          v-motion-pop
         src="../../assets/img_3.png" alt="">
    <item-list  :items="itemsinfo"/>
  </div>

</template>

<script>
import ItemList from "@/components/SecondInro/ItemList";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init();
})
export default {
  name: "BodyInro",
  components: {ItemList},



  data(){
    return{
      itemsinfo:[{name:"Stellar locations",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:require('../../assets/img_12.png')},
        {name:"High quality builds",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:require('../../assets/img_13.png')},
        {name:"Expert interior design",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img: require('../../assets/img_14.png')},


      ]
    }
  }
}

</script>

<style module>
.person-img{
  margin-right: 40px;
  max-width: 480px;
  min-height: 580px;
}
.body{
  justify-content: center;
  display: flex;
  flex-direction: row;
}
</style>