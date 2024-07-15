import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import scrollanimation from '@/Components/directives/scrollanimation.js'

const app = createApp(App)

app.directive('scrollanimation', scrollanimation)
app.mount('#app')
