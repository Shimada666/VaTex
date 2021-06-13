<template>
  <a-row>
    <a-col :span="12" :offset="6">
      <h1 style="text-align: center;">参数调整</h1>
      <div style="display: flex; justify-content: center;">
        <a-form :label-col="{style:'width: 80px'}">
          <a-form-item label="字号">
            <a-input-number v-model:value="formModel.fontsize" />
          </a-form-item>
          <a-form-item label="表达式">
            <a-textarea
              v-model:value="formModel.expression"
              :rows="10"
              style="width: 400px;" />
          </a-form-item>
        </a-form>
      </div>
      <h1 style="text-align: center;">效果展示</h1>
      <vue-latex :expression="formModel.expression" :fontsize="formModel.fontsize" />
    </a-col>
  </a-row>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue-demi'
import VueLatex from './lib/vue-latex/vue-latex.vue'

export default defineComponent({
  name: 'App',
  components: { VueLatex },
  setup () {
    const formModel = reactive({
      fontsize: 20,
      expression: 'D(x) = \\begin{cases}\n' +
          '\\lim\\limits_{x \\to 0} \\frac{a^x}{b+c}, & x<3 \\\\\n' +
          '\\pi, & x=3 \\\\\n' +
          '\\int_a^{3b}x_{ij}+e^2 \\mathrm{d}x,& x>3 \\\\\n' +
          '\\end{cases}'
    })
    return {
      formModel
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
