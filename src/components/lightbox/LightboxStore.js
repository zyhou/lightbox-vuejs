
class LightboxStore {

  constructor () {
    this.state = {
      images: [],
      index: false
    }
  }

  addImage (url) {
    return this.state.images.push(url) - 1
  }

  open (index) {
    this.state.index = index
  }

}

export default new LightboxStore()
