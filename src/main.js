import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './routes/domainStore'
const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js";