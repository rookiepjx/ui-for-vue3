import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router" 


// vue2 和 vue3 差别
// 1.模板template可以有多个根标签
// 2.createApp 取代 new Vue()

const app = createApp(App)
app.use(router)
app.mount('#app')

