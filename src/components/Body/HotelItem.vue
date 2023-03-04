<template>
  <div :class="$style.item">
    <img-child>
      <img :class="$style['hotel-img']" :src="item.img" alt="">

    </img-child>
    <h2 style="font-size: 14px; margin-top: 30px">{{item.title}}</h2>
    <h2 style="font-size: 18px;"> {{item.subtitle}}</h2>
    <div :class="$style.lis" style="font-size: 9px;">
     <div :class="$style['icon-text']">
       <img  :class="$style['icon-img']" src="..\..\assets\img_15.png" alt="">
       <p :class="$style['sm-text']">{{item.icon.bed}}</p>
     </div>
      <div :class="$style['icon-text']">
        <img src="..\..\assets\img_16.png" alt="" :class="$style['icon-img']">
        <p>{{item.icon.bath}}</p>
      </div>
      <div :class="$style['icon-text']">
      <img src="..\..\assets\img_17.png" alt="" :class="$style['icon-img']">
      <p>{{item.icon.room}}</p>
    </div>
    </div>

  </div>
</template>

<script>
import ImgChild from "@/components/CustomUI/img-child";
export default {
  name: "HotelItem",
  components: {ImgChild},
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style module>
.sm-text{
}
.hotel-img{
  width: 379px;
  height: 267px;
}
.icon-text{
  display: flex;
  flex-direction: row;
}
.icon-img{
  margin-right: 10px;
  width:17.5px;
  height:20px;
}
.lis{
padding: 0 10px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}
.item{
  background-color: white;

  width:380px ;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
</style>