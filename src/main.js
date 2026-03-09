import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.vue'

inject()
createApp(App).mount('#app')
