# VaTex

Vue2 / Vue3 可用的 vue latex 公式展示插件，是 katex 的简单封装  
同时也是 [vue-katex](https://github.com/lucpotage/vue-katex) 的 vue3 版本， 参考了大幅代码，在这里表示感谢

# 如何安装？

安装 `vatex` 和 `katex`

```shell
# With NPM
npm i vatex katex

# With Yarn
yarn add vatex katex
```

Vue2 用户需要额外安装 composition-api

```shell
yarn add @vue/composition-api
```

# 开始使用

### `Vue3`

#### 注册为全局组件

```ts
import {createApp} from 'vue'
import VueLatex from 'vatex'

app
  .use(VueLatex)
  .mount('#app')
```

然后

```vue

<vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
```

#### 单独引入

在 vue 文件中

```vue

<template>
  <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {VueLatex} from 'vatex'

export default defineComponent({
  components: {
    VueLatex
  }
})
</script>

```

### `Vue2`

#### 注册为全局组件

```ts
import Vue from 'vue';

Vue.use(VueKatex);
```

#### 单独引入

```vue

<template>
  <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
</template>
<script>
import {VueLatex} from 'vatex'

export default {
  name: 'App',
  components: {
    VueLatex
  }
}
</script>
```

# 参数说明

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| fontsize| 字体大小(px)，可以控制 LaTex 表达式的大小| number  |   —    |    16     |
| expression| LaTex表达式| string  |   —    |    —     |
| displayMode| 显示模式, true 时使用 div 承载且水平居中，false 时使用 span 内联 | boolean  |   —    |    false     |
| throwOnError| 错误时抛异常，true 时表达式错误会抛异常，false 时会使用红色显示错误的 LaTex 表达式，调整颜色可以传入 errorColor | boolean  |   -   |    false     |
| errorColor | 错误的颜色 | string | - | #cc0000 |
| minRuleThickness | 线(如分数线)、边框等线条大小(em) | number | - | 0.04 |
| macros | 宏，用对象表示 | object | - | null |
| strict | 严格模式, 值如 warn, error, ignore | \[string,object,function\] | - | warn |

# 与 vue-katex 的不同

* 支持 `vue3`
* 支持调整表达式大小(fontsize)，线条粗细(minRuleThickness) 等
* 更方便使用

# LICENCE

MIT License

Copyright (c) 2021 Shimada666

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
