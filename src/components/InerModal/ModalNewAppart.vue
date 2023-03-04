<template>
<div>
  <h1>Add the Good Stuffs.</h1>
  <form @submit.prevent>
    <div :class="$style.item">
      <input type="text" v-model="item.title" placeholder="Type apart">

    </div>
    <div :class="$style.item">
      <input type="text" v-model="item.subtitle" placeholder="Place">

    </div>
    <div :class="$style.item">
      <input type="file" accept="image/jpeg, image/png, image/jpg"
            v-on:change="setImg">
    </div>

  <circle-button    :content="'+'"   @click="createApart"
  ></circle-button>
  </form>
</div>
</template>

<script>
import CircleButton from "@/components/CustomUI/CircleButton";
import {Input} from "flowbite-vue";
export default {
  name: "ModalNewAppart",
  components: {Input, CircleButton},
  data(){
    return {
      item: {
        title: '',
        subtitle: '',
        img: '',
      }
    }
  },
  methods:{

    setImg(e){
      console.log(e.target.value.split('\\').slice(-1))
      this.item.img=require(`../../assets/${e.target.value.split('\\').slice(-1)}`)
    },
    createApart(){
   this.$emit('create',this.item)
      this.item.titel='';
   this.item.subtitle=''
      this.item.img='';
    }

  }
}
</script>

<style module>
input{
  border-radius: 10px;
  padding: 10px;
}
.item{
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>