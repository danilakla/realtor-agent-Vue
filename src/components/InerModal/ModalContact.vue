<template>
<div :class="$style.container">
  <h1 :class="$style.titel">Contact</h1>
  <div :class="$style['content-text']">
  <p>email: danik.kla@email.ru</p>
  <p>phone: +375*********</p>
  <p>gitHub: <a href="https://github.com/danilakla">https://github.com/danilakla</a></p>
  <p>LinkedIn:<a href="https://www.linkedin.com/in/danila-kartuzov-737613252/">https://www.linkedin.com/in/danila-kartuzov-737613252/</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: "ModalContact"
}
</script>

<style module>
.titel{
border-bottom: 2px solid black;
}
.container{
  color: black;
  text-align: left;

}


.content-text{
margin: 5px;
}
</style>