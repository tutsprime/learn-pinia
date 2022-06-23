import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App3.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
