import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon,Grid, GridItem,Image as VanImage,Popup  } from 'vant'
Vue.use(Button);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Popup);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
