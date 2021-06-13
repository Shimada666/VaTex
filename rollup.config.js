import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

const tsconfigOverride = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx']
}

export default [{
  input: 'src/lib/index.ts',
  plugins: [typescript({ tsconfigOverride }), vue(), terser()],
  external: [
    'vue',
    'katex',
    'vue-demi'
  ],
  output: [
    {
      name: 'VueLatex',
      file: 'dist/vatex.cjs.js',
      format: 'cjs'
    },
    {
      name: 'VueLatex',
      file: 'dist/vatex.esm.js',
      format: 'esm'
    },
    {
      name: 'VueLatex',
      file: 'dist/vatex.umd.js',
      format: 'umd',
      globals: {
        'katex': 'katex',
        'vue': 'vue',
        'vue-demi': 'VueDemi'
      },
      exports: 'named'
    }
  ]
}]
