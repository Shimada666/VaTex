import katex from 'katex'
import { computed, defineComponent } from 'vue-demi'
import h from '../utils/h-demi'
import 'katex/dist/katex.min.css'

export default defineComponent({
  name: 'VueLatex',
  props: {
    fontsize: {
      type: Number,
      default: 16,
    },
    expression: {
      type: String,
      required: true,
    },
    displayMode: {
      type: Boolean,
      default: false,
    },
    throwOnError: {
      type: Boolean,
      default: false,
    },
    errorColor: {
      type: String,
      default: undefined,
    },
    minRuleThickness: {
      type: Number,
      default: 0.04,
    },
    macros: {
      type: Object,
      default: undefined,
    },
    colorIsTextColor: {
      type: Boolean,
      default: undefined,
    },
    maxSize: {
      type: Number,
      default: undefined,
    },
    maxExpand: {
      type: Number,
      default: undefined,
    },
    allowedProtocols: {
      type: Array,
      default: undefined,
    },
    strict: {
      type: [Boolean, String, Function],
      default: undefined,
    },
  },
  setup(props) {
    const html = computed(() => katex.renderToString(props.expression, props))
    return {
      html,
    }
  },
  render() {
    return h(this.displayMode ? 'div' : 'span', {
      domProps: {
        innerHTML: this.html,
      },
      style: {
        'font-size': `${this.fontsize}px`,
      },
    })
  },
})
