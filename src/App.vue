<template>
  <div id="app">
    <a href="http://lorempicsum.com/simpsons/800/600/1" v-lightbox>
      <img src="http://lorempicsum.com/simpsons/150/150/1">
    </a>
    <Lightbox></Lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox.vue'

export default {
  components: {
    Lightbox
  }
}
</script>