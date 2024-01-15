import type { App } from 'vue-demi'
import VueLatex from './vue-latex'

function install(app: App) {
  app.component(VueLatex.name, VueLatex)
}

export {
  install,
  VueLatex,
}

export default { install }
