// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/scss/style.scss')
import Vue from 'vue'
import App from './App'
import router from './router'
import MyPlugin from './plugins/my-plugin'
import Mix from './mixins/mixin'
import Store from './store/store'
import Vuex from 'vuex'
import store from './store/login'

Vue.config.productionTip = false

var written = {props: {'message': String}, template: `<p>{{message}}</p>`}
Vue.component('nav-menu', {
  template: `<li><a href="#" @click="remove">{{title}}</a></li>`,
  props: ['title'],
  mixins: [Mix],
  created: function(){
    console.log('Component created')
  },
})
Vue.directive('tack', {
  bind(el, binding, vnode) {
    el.style.position = 'fixed'
    el.style.right = binding.value + 'px'
  }
})
var anotherClass = {template: `<div class=""><slot></slot></div>`}
var newClass = {props: {'status': String}, template: `<div class=""><strong>{{status}}</strong></div>`}

Vue.use(MyPlugin)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  data: {
  	welcome: "Welcome to the Vue.js trial page" ,
  	hello: "Hello World",
    another: '',
    a: 0,
    b: 0,
    newMenu: '',
    isActive: true,
    isVisible: true,
    hasError: false,
    loggedIn: false,
    isGood: '',
    errorFound: 'There is an error',
    noError: 'Good to go',
  	menu: [
  	{item: 'Home'},
  	{item: 'About'},
  	{item: 'Contact us'}
  	]
  },
  methods: {
    addNewItem: function () {
      this.menu.push({item: this.newMenu})
      this.newMenu = ''
    },
    subtract: function(index){
      this.menu.splice(index, 1)
    },
    decrease: function(){
      Store.commit('decrease')
    },
    increase: function(){
      Store.commit('increase')
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
  	num: function(){
  		return (this.a * 100 + this.b * 100)/100
  	},
    errorStatus: function(){
      if (this.hasError){
        this.isGood = false
        return this.errorFound
      }
      else{
        this.isGood = true
        return this.noError
      }
    },
    rname: function(){
      return this.$nname
    },
    counter: function(){
      return Store.state.counter
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  components: {
    'new-component': written,
    'class-component': newClass,
    'another-component': anotherClass
  }
}).$mount('#app')

new Vue({
  el: '#app1',
  computed: {
    counter: function(){
      return Store.state.counter
    }
  },
  methods: {
    decrease: function(){
      Store.commit('decrease')
    },
    increase: function(){
      Store.commit('increase')
    }
  }
})
