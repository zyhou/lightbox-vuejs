<template>
    <div @click.stop>
        <img :src="src" class="lightbox__image" :style="style">
        <div  class="lightbox__loading"></div>
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
  methods: {
    resizeImage (image) {
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
  },
  mounted () {
    let image = new window.Image()

    image.onload = _ => {
      this.loading = false
      this.src = this.image
      this.resizeImage(image)
    }

    image.src = this.image
    window.addEventListener('resize', () => {
      this.resizeImage(image)
    })
  }
}
</script>