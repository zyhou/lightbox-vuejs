
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

  closed () {
    this.state.index = false
  }

  next () {
    this.state.index = this.state.index + 1 < this.props.images.length ? this.state.index + 1 : 0
  }

  prev () {
    this.state.index = this.state.index - 1 < 0 ? this.props.images.length - 1 : this.state.index - 1
  }

}

export default new LightboxStore()
