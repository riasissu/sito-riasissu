import router from './router'
import Vue from 'vue'
import App from './App.vue'

import components from 'vuetify/lib/components'
import colors from 'vuetify/lib/util/colors'

import Vuetify from 'vuetify/lib'

Vue.use(Vuetify,
  components,
  colors
)

Vue.config.productionTip = false;

const vuetify = new Vuetify({ components,
//   theme: { dark: true }
} );

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');