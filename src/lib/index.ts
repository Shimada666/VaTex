import VueLatex from './vue-latex'
import { App } from 'vue-demi'

const install = (app: App) => {
  app.component(VueLatex.name, VueLatex)
}

export {
  install,
  VueLatex
}

export default { install }
