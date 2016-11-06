<style src="./lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image" @click="closed">
    <transition name="lightbox-fade">
      <LightboxImage :image="image" :key="image"></LightboxImage>
    </transition>
    <div class="lightbox__close" @click="closed"></div>
    <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
    <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
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
  methods: {
    closed () { store.closed() },
    next () { store.next() },
    prev () { store.prev() }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.index]
      }
    }
  }
}
</script>