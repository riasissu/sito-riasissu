import router from './router'
import Vue from 'vue'
import App from './App.vue'


import components from 'vuetify/lib/components'
import colors from 'vuetify/lib/util/colors'


import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

export const eventBus = new Vue();

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})

Vue.use(Vuetify,
  components,
  colors,
)

Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');

