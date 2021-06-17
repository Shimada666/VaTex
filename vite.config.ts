import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'pages'
  }
})
