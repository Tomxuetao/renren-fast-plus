import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/utils/http'

createApp(App).use(store).use(router).use(http).mount('#app')
