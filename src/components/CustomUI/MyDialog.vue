<template>
  <div :class="$style.dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop :class="$style.dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import togleMixins from "@/mixins/togleMixins";

export default {
  name: 'my-dialog',
  mixins: [togleMixins],
  mounted() {
    console.log('dialog mounted')
  }
}
</script>

<style module>
.dialog {
  z-index: 2000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {

  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
