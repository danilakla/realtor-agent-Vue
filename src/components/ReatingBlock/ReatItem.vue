<template>
<div :class="[{[$style.isNo]:item.is==0},$style.item,{[$style['right-slide']]:directionSlide},{[$style['left-slide']]:directionSlidLeft}]">
  <div>
    <div v-for="i in 5" :key="i" style="display: inline-block">
      <img :class="$style['reat-img']" src="../../assets/img_7.png"  v-on:click.prevent="changeStart" alt="">
    </div>

  </div>
  <h1>{{item.title}}</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse varius enim in eros elementum tristique. Duis cursus,
    mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
    et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
  </p>
  <p :class="$style['new-border']">{{item.name}}</p>
</div>
</template>

<script>
export default {
  name: "ReatItem",
  props:{
    directionSlide:Boolean,
    directionSlidLeft:Boolean,

    item:{
      required:true,
      type:Object
    }
  },
  data(){
    return{
      setStar:true,
    }

  },

  methods:{
    changeStart(e){

      if(this.setStar){
        e.currentTarget.src=require('../../assets/img_30.png')

      }else{
        e.currentTarget.src=require('../../assets/img_7.png')

      }
      this.setStar=!this.setStar;
    }

  }
}
</script>

<style module>




.new-border{
  border-left: 2px solid #FF8A63;
  padding-left: 3px;
}
.isNo{
  display: none;


}

.right-slide{
  animation: 1s ease-in-out  alternate-reverse right-sl;

}

.left-slide{
  animation: 1s ease-in-out   alternate-reverse left-sl;

}
.cl-test{

}
@keyframes    right-sl {
   from {

     /* pushes the sun down past the viewport */

     transform: translateX(0);
   }
   to {
     display: none;
     opacity: 0;     /* returns the sun to its default position */
     transform: translateX(-100PX);
   }
 }

@keyframes    left-sl {
  from {

    /* pushes the sun down past the viewport */
  opacity: 1;
    transform: translateX(0);
  }
  to {
    display: none;
    opacity: 0;

    /* returns the sun to its default position */
    transform: translateX(100PX);
  }
}
.item{
  max-width: 630px;
  text-align: left;
  padding: 10px;
  border: 1px solid black;

}


.reat-img{
  width: 18px;
  height: 18px;
}
</style>