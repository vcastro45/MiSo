// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './hooks' // This must be imported before any component
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import './styles/global.css'
import '@/assets/css/main.css'
import '@/assets/fonts/fonts.css'

import App from './App.vue'
import router from './router'

Vue.use(Vuetify, {
  theme: {
    primary: '#213451',
    secondary: { base: '#edb48e', lighten1: '#fcf2ec', lighten2: '#fefaf8' }
  }
})

// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
