import { createApp } from 'vue'
import http from '@/utils/http'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import '@/element-ui-theme'
import '@/assets/scss/index.scss'
import '@/icons'

import CustomComp from '@/components/index'

createApp(App).use(store).use(router).use(http).use(ElementUI).use(CustomComp).mount('#app')
