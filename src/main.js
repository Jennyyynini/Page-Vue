import './assets/main.css'
import './styles.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()


const app = createApp(App)

app.component('Delete', Delete)
app.component('Edit', Edit)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
