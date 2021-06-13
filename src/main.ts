import { createApp } from 'vue-demi'
import App from '@/App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd)
  .mount('#app')
