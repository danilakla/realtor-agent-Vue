<template>
  <div class="container-fluid">
  <div class="container">
<h1 style="color: #FF8A63; font-size: 14px;">Newsroom</h1>
  <h2> Writing from Estate.</h2>
  <list-new-room :items="rooms"/>

  <common-link @click="$router.push('/new-house')"/>
  </div>
  </div>
</template>

<script>
import ListNewRoom from "@/components/NewRooms/ListNewRoom";
import CommonLink from "@/components/CommonComponentsUI/CommonLink";
import MyDialog from "@/components/CustomUI/MyDialog";
export default {
  name: "NewRooms",
  components: {MyDialog, CommonLink, ListNewRoom},
  data(){

    return {
      rooms:[{img:require('../../assets/img_6.png'),title:"Press release",subtitle:"Market watch: are condos still a good investment?",date:"August 12, 2021"},
        {img:require('../../assets/img_28.png'),title:"Announcement",subtitle:"The history of great design",date:"August 12, 2021"},
        {img:require('../../assets/img_29.png'),title:"Company news",subtitle:"Designers who changed everything",date:"August 12, 2021"},

      ]
    }
  }
}
</script>

<style scoped>
.container, .container-fluid{
  background-color: #FAFAFC;

}
.container-fluid{
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>