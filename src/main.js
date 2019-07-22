import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    sum: 0
  },
  getter:{
    getCount: state => state.sum,
  },
  mutations: {
    increment (state) {
      state.sum++
    },
    decrease (state) {
      state.sum--
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
