import { App } from 'vue-demi'
import VueLatex from './vue-latex'

VueLatex.install = (app: App) => {
  app.component(VueLatex.name, VueLatex)
}

export default VueLatex
