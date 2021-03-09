import { createApp } from 'vue'
import http from '@/utils/http'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss'
import 'normalize.css/normalize.css'
import '@/icons'

import SvgIcon from '@/components/index'

createApp(App).use(store).use(router).use(ElementUI).use(http).use(SvgIcon).mount('#app')
