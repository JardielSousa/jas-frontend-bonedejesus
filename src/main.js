import Vue from 'vue'
import App from './App.vue'
import jQuery from "jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'waypoints/lib/jquery.waypoints'

window.jQuery = jQuery;
var $ = window.jQuery;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
