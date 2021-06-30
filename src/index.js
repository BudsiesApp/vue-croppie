import VueCroppieComponent from './VueCroppieComponent'

const VueCroppie = {
  install (Vue, options) {
    Vue.component(VueCroppieComponent.name, VueCroppieComponent)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(VueCroppie)
}

export default VueCroppie
export { VueCroppieComponent }