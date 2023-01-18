import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/button.vue'

Vue.config.productionTip = false

Vue.component(HmButton.name, HmButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
