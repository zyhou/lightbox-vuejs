<style src="./lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image">
    <lightbox-image :image="image"></lightbox-image>
  </div>
</template>

<script>
import './LightboxDirective'
import LightboxImage from './LightboxImage.vue'
import store from './LightboxStore'

export default {
  components: {
    LightboxImage
  },
  data () {
    return {
      state: store.state
    }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.index - 1]
      }
    }
  }
}
</script>