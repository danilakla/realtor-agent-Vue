<template>
  <div class="img-contain">
    <div class="overlay">
      <p class="overlay-text">Next</p>
    <circle-button style="color: white"  @click="toggleShow" :content="'+'"/>
    </div>
    <transition name="flip" mode="out-in">
      <div v-if="!isShowing">
        <slot></slot>
      </div>
      <img v-else src='../../assets/img_21.png' alt=''>
    </transition>
  </div>
</template>

<script>
import CircleButton from "@/components/CustomUI/CircleButton";
export default {
  name: "img-child",
  components: {CircleButton},
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
}
</script>

<style scoped>


.img-contain {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform-origin: 50% 50%;
}

img {
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}



.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s all ease-out;
}

.img-contain .overlay {

  position: absolute;
  z-index: 1000;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s all ease-in;
}

.overlay-text {
  margin-top: 40px;
  color: white;
}

h4 {
  margin: 0 0 15px;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

</style>