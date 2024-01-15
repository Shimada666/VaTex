# VaTex

[![NPM version](https://img.shields.io/npm/v/vatex.svg?style=flat)](https://www.npmjs.com/package/vatex) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The vue latex formula display plugin, available for Vue2 / Vue3.  
Simply encapsulate katex.  
It is also the vue3 version of [vue-katex](https://github.com/lucpotage/vue-katex), refer to a lot of code, thanks here.

> [🇨🇳 中文文档](./README-zh.md)

# Installation

Install vue-katex with katex as a peer dependency

```shell
# With NPM
npm i vatex katex

# With Yarn
yarn add vatex katex
```

Vue2 developers need install composition-api

```shell
yarn add @vue/composition-api
```

# Getting started

### `Vue3`

#### Register globally

```ts
import { createApp } from 'vue'
import VueLatex from 'vatex'

app
  .use(VueLatex)
  .mount('#app')
```

Then

```vue
<vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode />
```

#### Register locally

in vue file

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { VueLatex } from 'vatex'

export default defineComponent({
  components: {
    VueLatex
  }
})
</script>

<template>
  <VueLatex expression="\frac{a_i}{1+x}" display-mode />
</template>
```

### `Vue2`

#### Register globally

```ts
import Vue from 'vue'

Vue.use(VueKatex)
```

#### Register locally

```vue
<script>
import { VueLatex } from 'vatex'

export default {
  name: 'App',
  components: {
    VueLatex
  }
}
</script>

<template>
  <VueLatex expression="\frac{a_i}{1+x}" display-mode />
</template>
```

# Arguments

| Argument      | Description    | Type      | Optional       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| fontsize| font size(px)，it can control the LaTex expression size| number  |   —    |    16     |
| expression| LaTex expression| string  |   —    |    —     |
| displayMode| Display mode. When true, use `div` to render and center the element. When false, use `span` | boolean  |   —    |    false     |
| throwOnError| If true , KaTeX will throw a ParseError when it encounters an unsupported command or invalid LaTeX. If false, KaTeX will render unsupported commands as text, and render invalid LaTeX as its source code with hover text giving the error, in the color given by errorColor. | boolean  |   -   |    false     |
| errorColor | A color string given in the format "#XXX" or "#XXXXXX". This option determines the color that unsupported commands and invalid LaTeX are rendered in when throwOnError is set to false. (default: #cc0000) | string | - | #cc0000 |
| minRuleThickness | Specifies a minimum thickness, in ems, for fraction lines, \sqrt top lines, {array} vertical lines, \hline, \hdashline, \underline, \overline, and the borders of \fbox, \boxed, and \fcolorbox. The usual value for these items is 0.04(em), so for minRuleThickness to be effective it should probably take a value slightly above 0.04(em), say 0.05(em) or 0.06(em). Negative values will be ignored. | number | - | 0.04 |
| macros | A collection of custom macros. Each macro is a property with a name like \name (written "\\name" in JavaScript) which maps to a string that describes the expansion of the macro, or a function that accepts an instance of MacroExpander as first argument and returns the expansion as a string. | object | - | null |
| strict |  If false or "ignore", allow features that make writing LaTeX convenient but are not actually supported by (Xe)LaTeX (similar to MathJax). If true or "error" (LaTeX faithfulness mode), throw an error for any such transgressions. If "warn" (the default), warn about such behavior via console.warn. Provide a custom function handler(errorCode, errorMsg, token) to customize behavior depending on the type of transgression (summarized by the string code errorCode and detailed in errorMsg); this function can also return "ignore", "error", or "warn" to use a built-in behavior.  | \[boolean,string,function\] | - | warn |

[More options](https://katex.org/docs/options.html)

# Difference from [vue-katex](https://github.com/lucpotage/vue-katex)

* Support `vue3`
* Support adjust expression size(fontsize)，line thickness(minRuleThickness), etc.
* Use easily

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
