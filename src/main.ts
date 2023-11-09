import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PageHome from './view/PageHome.vue'
import PageDetail from './view/PageDetail.vue'

const routes = [
    { name: "home", path: '/', component: PageHome },
    { name: "detail", path: '/detail/:id', component: PageDetail },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')