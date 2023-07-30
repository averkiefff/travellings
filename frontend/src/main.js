import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

createApp(App)
    .use(store)
    .use(vuetify)
    .use(router)
    .mount('#app')

new Vue({
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#app');