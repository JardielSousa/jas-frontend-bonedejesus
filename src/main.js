import Vue from 'vue'
import App from './App.vue'
import jQuery from "jquery/dist/jquery.min.js";
import '@fortawesome/fontawesome-free/css/all.css'

global.jQuery = jQuery;
var $ = global.jQuery;
window.$ = $;
// global.Waypoint = Waypoint

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
