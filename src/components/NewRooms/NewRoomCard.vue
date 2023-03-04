<template>
  <div :class="$style.item">
    <img :class="$style['room-img']" :src="item.img" alt="">
    <h2 style="font-size: 14px; margin-top: 10px; color: #FF8A63">{{item.title}}</h2>
    <h2 style="font-size: 18px;"> {{item.subtitle}}</h2>
      <p>{{item.date}}</p>


  </div>
</template>

<script>
export default {
  name: "NewRoomCard",
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style module>
.room-img{
  width: 379px;
  height: 267px;

}
.room-img:hover{
 scale: 1.1;
  transition: 1s;


}



.item{
  background-color: white;

  width:380px ;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
</style>