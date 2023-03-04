<template>
<div class="container">
  <div class="info-title">
    <h1>Testimonials</h1>
    <h2>What our customers say.</h2>
  </div>
<list-reating :direct="direct" :direct-left="directLeft" :items="reateBlock" :count-click="isClick"/>
  <div class="group-button">
    <div>
    <back-circle-button v-model:iscl="isClick" v-on:click="testBack" class="circl" content="<"/>
    </div>
    <div>

    <circle-button v-model:iscl="isClick"  v-on:click="testNext" content=">"/></div>
  </div>

</div>
</template>

<script>
import ListReating from "@/components/ReatingBlock/ListReating";
import CircleButton from "@/components/CustomUI/CircleButton";
import BackCircleButton from "@/components/CustomUI/BackCircleButton";
export default {
  name: "ReatingBlock",
  components: {BackCircleButton, CircleButton, ListReating},
  data(){
    return  {
      direct:true,
      directLeft:false,

      isClick:0,
      reateBlock:[{title:"1 We found the perfect home!",name:"Nate Davidsson", is:1},
        {title:"2 We're so happy with Estate.",name:"Laura Paulie", is:1},
        {title:"3 We're so happy with Estate.",name:"Laura Paulie", is:0},
        {title:"4 We're so happy with Estate.",name:"Laura Paulie", is:0},
        {title:"5 We're so happy with Estate.",name:"Laura Paulie", is:0},

      ]    }
  },
  methods:{
    testNext(){
      this.directLeft=false

      this.direct=true;
      if(this.isClick==this.reateBlock.length){
        this.reateBlock=this.reateBlock.map(e=>{

          return {...e,is:0}}
        )
        this.reateBlock[0].is=1;
        this.reateBlock[1].is=1;
        this.isClick=0;
      }else{
        let index= this.reateBlock.map(e=>e.is).indexOf(1)
        this.reateBlock[index].is=0
        this.reateBlock[index+2].is=1
      }



    },


    testBack(){
      this.direct=false;

      this.directLeft=true;

      if(this.isClick<0){
      this.isClick=0;
      return
    }
     let index= this.reateBlock.map(e=>e.is).indexOf(1)
      this.reateBlock[index-1].is=1;
      this.reateBlock[index+1].is=0;



    }

  }

}
</script>

<style scoped>
.group-button{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: right;

}
.group-button div{
  margin-left:10px;

}
.info-title{
  text-align: left;
}
h1{
  color: #FF8A63;
  font-size: 14px;
}

.container{
  padding-bottom: 100px;
  padding-top: 100px;
}
</style>