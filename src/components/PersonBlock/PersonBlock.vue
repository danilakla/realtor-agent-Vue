<template>
  <div class="container">
    <div class="block-body">

<div class="info">
  <title-comp-main  style="text-align: left"/>

  <common-link @click="$router.push('/person')" style="text-align: left"/>

</div>
<list-person :items="persons"/>

    </div>
  </div>
</template>

<script>
import TitleCompMain from "@/components/CommonComponentsUI/TitleCompMain";
import CommonLink from "@/components/CommonComponentsUI/CommonLink";
import ListPerson from "@/components/PersonBlock/ListPerson";
import MyDialog from "@/components/CustomUI/MyDialog";
export default {
  name: "PersonBlock",
  components: {MyDialog, ListPerson, CommonLink, TitleCompMain},
  data(){
    return{
      persons:[{
        img:require('../../assets/img_2.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      },{
        img:require('../../assets/img_23.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      },{
        img:require('../../assets/img_24.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      },{
        img:require('../../assets/img_25.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      },{
        img:require('../../assets/img_26.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      },{
        img:require('../../assets/img_27.png'),
        name:"Ava Orn",
        profec:"Managing Broker"

      }]
    }
  }
}
</script>

<style scoped>
.block-body{
  display: flex;
  flex-direction: row;
}
.container{
  padding-bottom: 100px;
  padding-top: 100px;
}
</style>

