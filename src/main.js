
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' 
impaxios.defaults.baseURL = 'http://localhost:8000' 
createApp(App).use(router).mount('#app')
import { createPinia } from 'pinia'
const pinia = createPinia()
App.use(pinia)