import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import axios from 'axios'

=======
import './static/css/main.css'
import './static/css/icon.css'
>>>>>>> 9462956cbf7d76c554c66b5af6959cc650554302
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
