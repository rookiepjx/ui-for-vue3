import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from "vue-router"

import Home from "./components/Home.vue";
import About from "./components/About.vue";

// vue2 和 vue3 差别
// 1.模板template可以有多个根标签
// 2.createApp 取代 new Vue()
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[{
    path:'/',
    component:Home
  },{
    path:'/about',
    component:About
  }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
