module.exports = {
  'extends': ['stylelint-config-standard'],
  'ignoreFiles': [''],
  'rules': {
    // css缩进
    'indentation': 2,
    'max-empty-lines': null,
    // 规则之前禁止空行
    'rule-empty-line-before': 'never-multi-line',
    // 注释之前禁止空行
    'comment-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null // 不允许空的来源
  }
}
