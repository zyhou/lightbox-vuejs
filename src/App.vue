<template>
  <div id="app">
    <a :href="'http://lorempicsum.com/simpsons/800/600/'+ n" v-lightbox v-for="n in 9">
      <img :src="'http://lorempicsum.com/simpsons/150/150/' + n">
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