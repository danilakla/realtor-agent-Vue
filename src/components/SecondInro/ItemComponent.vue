<template>
  <div :class="$style.item" @click="test"
       v-motion :initial="{       x: 100,
    opacity: 0,}" :visible="{          x: 0,
    rotate: 0,
    opacity: 1,transition:{duration:1000}}">
    <div :class="$style['cont-img']">
      <img :class="$style['root-img']" :src="item.img">
    </div>
    <p :class="$style.text">{{ item.name }}</p>
    <p :class="[$style.text, $style.dre]" >{{ item.body }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemComponent",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods:{
    test(){
      alert(this.item.img)
    }
  }
}
</script>

<style module>
.dre{
  width: 60%;
}
.root-img{
  width: 100%;

  height: 100%;
  align-content: center;
}

.text {
  display: block;
  text-align: left;
}

.cont-img {
  box-sizing: content-box;
  padding: 10px;
  width: 30px;
  height: 30px;
  background-color: #2c3e50;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #CACCD133;
  padding: 15px;
  transition: 1s;
}
.item:hover{
  scale: 1.1;
}
</style>