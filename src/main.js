import { createApp } from 'vue'
import http from '@/utils/http'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-plus'
import '@/element-ui-theme'
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).use(http).use(elementUI).mount('#app')
