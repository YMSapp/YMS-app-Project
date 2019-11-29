import Vue from 'vue'
import App from './App'
import axios from 'axios'


import './static/css/main.css'
import './static/css/icon.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
