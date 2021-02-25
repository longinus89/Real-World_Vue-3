import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { registerComponents } from '@/plugins/register-components'

const app = createApp(App)
  .use(store)
  .use(router)

registerComponents(app)

app.mount('#app')
