import Vue from 'vue'
import App from './App.vue'
import jQuery from "jquery/dist/jquery.min.js";
import 'waypoints/lib/jquery.waypoints.js'
import 'bootstrap/dist/css/bootstrap.css'

global.jQuery = jQuery;
var $ = global.jQuery;
window.$ = $;
// global.Waypoint = Waypoint

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
