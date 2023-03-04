<template>
  <p><a  :class="$style['link-a']" href="" v-on:click.prevent>Show all listings -></a></p>

</template>

<script>
export default {
  name: "CommonLink"
}
</script>

<style module>
.link-a{
  text-underline: none;
  color: #2c3e50;
}
</style>