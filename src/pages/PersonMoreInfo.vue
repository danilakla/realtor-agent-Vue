<template>
<h1>MORE INFO ABOUT THE PERSON</h1>
<store-button/>

</template>

<script>

import {Button} from "flowbite-vue";
import StoreButton from "@/pages/StoreButton";
export default {
  name: "PersonMoreInfo",
  components: {StoreButton, Button}
}
</script>

<style scoped>
h1{
  border-bottom: 2px solid black;

}
</style>