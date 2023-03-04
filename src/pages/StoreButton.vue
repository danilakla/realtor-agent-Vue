<template>
  <button @click="$router.back('/')" v-on:click="$store.commit('test/setBack')"  style="border-radius: 25px; width: 50px; height: 50px; background-color: white"></button>
  <h1> {{$store.state.test.backCounter}}</h1>

</template>

<script>
export default {
  name: "StoreButton"
}
</script>

<style scoped>

</style>