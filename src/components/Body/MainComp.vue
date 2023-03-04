<template>
  <div class="container-fluid" :id="`test`">

  <div  class="container">
    <div style="display: flex; flex-direction: row; justify-content: left">

    <title-comp-main style="text-align: left"  />
    </div>
    <hotel-list :items="hotels"/>
    <my-dialog v-model:show="dialogVisible">
  <modal-new-appart @create="addApartment"/>
    </my-dialog>
    <common-link v-on:click="this.dialogVisible=!this.dialogVisible"/>
  </div>
  </div>
</template>

<script>
import TitleCompMain from "@/components/CommonComponentsUI/TitleCompMain";
import HotelList from "@/components/Body/HotelList";
import CommonLink from "@/components/CommonComponentsUI/CommonLink";
import MyDialog from "@/components/CustomUI/MyDialog";
import ModalNewAppart from "@/components/InerModal/ModalNewAppart";
export default {
  name: "MainComp",
  components: {ModalNewAppart, MyDialog, CommonLink, HotelList, TitleCompMain},
  data(){
    return {
      dialogVisible:false,
      hotels:[{img:require("../../assets/img_5.png"),title:"House",subtitle:"California St.",icon:{bed:"16 bed",bath:"2 bathrooms",room:"11 rooms"}},
        {img:require("../../assets/img_19.png"),title:"Villa",subtitle:"Welford Gardens",icon:{bed:"16 bed",bath:"2 bed",room:"11 bed"}},
        {img:require("../../assets/img_20.png"),title:"House",subtitle:"California St.",icon:{bed:"16 bed",bath:"2 bathrooms",room:"11 rooms"}},
        {img:require("../../assets/img_21.png"),title:"Villa",subtitle:"Welford Gardens",icon:{bed:"16 bed",bath:"2 bed",room:"11 bed"}},
        {img:require("../../assets/img_22.png"),title:"House",subtitle:"California St.",icon:{bed:"16 bed",bath:"2 bathrooms",room:"11 rooms"}},
        {img:require("../../assets/img_18.png"),title:"Villa",subtitle:"Welford Gardens",icon:{bed:"16 bed",bath:"2 bed",room:"11 bed"}},
   ]
    }
  },
  methods:{
    addApartment(el){
      console.log(el)
      this.hotels.push({...el,icon:{bed:"16 bed",bath:"2 bed",room:"11 bed"}})
    }
  }
}
</script>

<style scoped>
.container{
  background-color: #FAFAFC;
}
.container-fluid{
  padding-top: 100px;
  background-color: #FAFAFC;
  padding-bottom: 100px;
}

</style>