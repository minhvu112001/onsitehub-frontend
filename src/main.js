
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import './assets/main.css'
 createApp(App).use(router).mount('#app')
import { createPinia } from 'pinia'
const pinia = createPinia()
App.use(pinia)