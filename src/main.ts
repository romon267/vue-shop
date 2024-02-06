import '@/app/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/lib/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
