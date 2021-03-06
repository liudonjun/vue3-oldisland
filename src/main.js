import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import '@/assets/styles/global.scss'
import '@/assets/icon/iconfont.css'

let app = createApp(App);
app.use(router);
app.mount('#app')
