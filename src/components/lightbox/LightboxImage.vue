<template>
    <div>
        <div v-if="loading">Chargement...</div>
        <img :src="src" class="lightbox__image">
    </div>
</template>

<script>
export default {
  props: {
    image: String
  },
  data () {
    return {
      loading: true,
      src: false,
      style: {}
    }
  },
  mounted () {
    let image = new window.Image()
    console.log('oui')
    image.onload = _ => {
      this.loading = false
      this.src = this.image
      console.log('oui')

      let width = image.width
      let height = image.height

      if (width > window.innerWidth || height > window.innerHeight) {
        let radio = width / height
        let windowRadio = window.innerWidth / window.innerHeight

        if (radio > windowRadio) {
          width = window.innerWidth
          height = width / radio
        } else {
          height = window.innerHeight
          width = height * radio
        }
      }

      this.style = {
        width: width + 'px',
        height: height + 'px',
        top: ((window.innerHeight - height) * 0.5) + 'px',
        left: ((window.innerWidth - width) * 0.5) + 'px'
      }
    }
  }
}
</script>