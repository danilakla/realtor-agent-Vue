<template>
<div :class="$style['info-block']">
<p  :class="$style.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
 <p :class="$style.text">
   Interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
 </p>

  <person-card :item="person"/>

</div>
</template>

<script>
import PersonCard from "@/components/CommonComponentsUI/PersonCard";
export default {
  name: "InformBlock",
  components: {PersonCard},
  data(){
    return{
      person:{
        img:require('../../assets/img_2.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      }
    }
  }
}
</script>

<style module>
.info-block{
  width: 40%;
}
.text{

  text-align: left;
}
</style>