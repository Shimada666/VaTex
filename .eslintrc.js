module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    // 超过两个属性以上的元素必须换行
    'vue/max-attributes-per-line': ['error', {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    // html 2空格缩进
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    // 禁止注册模板内未使用的组件
    'vue/no-unused-components': ['error', {
      'ignoreWhenBindingPresent': true
    }],
    // computed必须有返回值
    'vue/return-in-computed-property': ['error', {
      'treatUndefinedAsUnspecified': true
    }],
    // 强制在Vue模板中的自定义组件上使用带连字符'-'的属性名称
    'vue/attribute-hyphenation': ['error', 'always', {
      'ignore': []
    }],
    // 不允许'>'单独成行
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    // 闭标签之前有一个空格
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    // HTML属性强制为双引号
    'vue/html-quotes': ['error', 'double'],
    // 标签中间没有内容使用闭标签
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    // 双括号与表达式之间有且只有一个空格
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // 组件name、定义必须为PascalCase（全驼峰）
    'vue/name-property-casing': ['error', 'PascalCase'],
    // 组件内属性强制使用驼峰命名
    'vue/prop-name-casing': ['error', 'camelCase'],
    // 强制使用：而不是v-bing
    'vue/v-bind-style': ['error', 'shorthand'],
    // 强制使用@ 而不是v-on
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
