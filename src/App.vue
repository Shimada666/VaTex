<template>
  <a-row style="margin-top: 50px;">
    <a-col :sm="12" :xs="24">
      <h1 style="text-align: center;">参数调整</h1>
      <div style="display: flex; justify-content: center;">
        <a-form :label-col="{style:'width: 120px'}" :rules="rulesRef">
          <a-form-item label="字号">
            <a-input-number v-model:value="formModel.fontsize" />
          </a-form-item>
          <a-form-item label="展示模式">
            <a-switch v-model:checked="formModel.displayMode" />
          </a-form-item>
          <a-form-item label="错误时异常抛出" help="打开时，表达式错误控制台会有异常抛出">
            <a-switch v-model:checked="formModel.throwOnError" />
          </a-form-item>
          <a-form-item label="线条粗细">
            <a-input-number
              v-model:value="formModel.minRuleThickness"
              :min="0"
              :max="1"
              :step="0.01" />
          </a-form-item>
          <a-form-item label="表达式">
            <a-textarea
              v-model:value="formModel.expression"
              :rows="10"
              style="width: 400px;" />
          </a-form-item>
          <a-form-item label="宏" prop="macros">
            <a-textarea
              v-model:value="formModel.macros"
              :rows="10"
              style="width: 400px;" />
          </a-form-item>
        </a-form>
      </div>
    </a-col>
    <a-col :sm="12" :xs="24">
      <h1 style="text-align: center;">效果展示</h1>
      <vue-latex
        :throw-on-error="formModel.throwOnError"
        :macros="JSON.parse(formModel.macros)"
        :min-rule-thickness="formModel.minRuleThickness"
        :display-mode="formModel.displayMode"
        :expression="formModel.expression"
        :fontsize="formModel.fontsize" />
    </a-col>
  </a-row>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue-demi'
import VueLatex from './lib/vue-latex/vue-latex.ts'
import 'katex/dist/katex.min.css'
import { RuleObject } from 'ant-design-vue/lib/form/interface'

export default defineComponent({
  name: 'App',
  components: { VueLatex },
  setup () {
    const formModel = reactive({
      fontsize: 20,
      displayMode: true,
      throwOnError: false,
      minRuleThickness: 0.04,
      macros: `{"\\\\f": "#1f(#2)"}`,
      expression: 'D(x) = \\begin{cases}\n' +
        '\\lim\\limits_{x \\to 0} \\frac{a^x}{b+c}, & x<3 \\\\\n' +
        '\\pi, & x=3 \\\\\n' +
        '\\int_a^{3b}x_{ij}+e^2 \\mathrm{d}x,& x>3 \\\\\n' +
        '\\end{cases} \n' +
        '\\\\' +
        '\n' +
        '% \\f is defined as #1f(#2) using the macro\n' +
        '\\f\\relax{x} = \\int_{-\\infty}^\\infty\n' +
        '    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n' +
        '    \\,d\\xi'
    })
    const rulesRef = reactive({
      macros: [
        {
          validator: async (rule: RuleObject, value: string) => {
            try {
              JSON.parse(formModel.macros)
              return Promise.resolve()
            } catch (e: Error) {
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('输入的不是合法的 json, ' + e.message)
            }
          }
        }
      ]
    })
    return {
      formModel,
      rulesRef
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
