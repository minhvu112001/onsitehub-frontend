
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createPinia } from 'pinia'
app.use(createPinia()) 
createApp(App).use(router).mount('#app')
