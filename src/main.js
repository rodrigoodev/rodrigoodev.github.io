import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

library.add(faCartShopping, faBars, faTimes)

app.component('icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
