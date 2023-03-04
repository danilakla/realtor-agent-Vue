<template>
  <div>
    <button class="btn " type="submit" v-on:click="click">{{this.content}}</button>

  </div>

</template>

<script>
export default {
  name: "CircleButton",
  props:{
    iscl:Number,
    content:String
  },
  methods:{
    click(){
      this.$emit('update:iscl',(this.iscl+1))
    }

  },


}
</script>

<style scoped>
div{
margin-top: auto;
  margin-bottom: 100px;
}
button{
  border-radius: 50%;
border: 1px solid gray;
  width: 50px;
  height: 50px;
}
</style>