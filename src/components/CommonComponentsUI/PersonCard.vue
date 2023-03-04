<template>
  <div class="col">

  <div class="cont ">
    <img :src="item.img" alt="">
    <div class="title">
      <p>{{item.name}}</p>
      <p>{{item.profec}}</p>
    </div>
  </div>
    </div>
</template>

<script>

export default {
  name: "PersonCard",
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}

</script>

<style scoped>
.cont{
  text-align: left;
  display: flex;
  flex-direction: row;

}
p{
  display: block;
}
img{
  width: 80px;
  height: 80px;
  border-radius: 50%;

}
</style>