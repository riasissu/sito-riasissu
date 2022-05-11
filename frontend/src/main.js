/*import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'


createApp(App).use(router).mount('#app')


import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/
/*
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/compat/app'
Vue.config.productionTip = false


const firebaseConfig = {
    apiKey: "AIzaSyDDbBbCydrNYqW8o3lG0vnFvdtlhGzywgo",
    authDomain: "sito-riasissu.firebaseapp.com",
    projectId: "sito-riasissu",
    storageBucket: "sito-riasissu.appspot.com",
    messagingSenderId: "81670035087",
    appId: "1:81670035087:web:433f388c9fe06a522842fa",
    measurementId: "G-WQJ6WP2TKN",
}
Vue.use(Vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
*/

import router from './router'
import Vue from 'vue'
import App from './App.vue'

import components from 'vuetify/lib/components'
import colors from 'vuetify/lib/util/colors'

import Vuetify from 'vuetify/lib'

import firebase from 'firebase/compat/app'

Vue.use(Vuetify,
  components,
  colors
)

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyDDbBbCydrNYqW8o3lG0vnFvdtlhGzywgo",
  authDomain: "sito-riasissu.firebaseapp.com",
  projectId: "sito-riasissu",
  storageBucket: "sito-riasissu.appspot.com",
  messagingSenderId: "81670035087",
  appId: "1:81670035087:web:433f388c9fe06a522842fa",
  measurementId: "G-WQJ6WP2TKN",
}


firebase.initializeApp(firebaseConfig)

//const auth = firebase.auth(app)
//const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

const vuetify = new Vuetify({ components,
   theme: { dark: true }
} )
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')