// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/style.scss')
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

var written = {props: {'message': String}, template: `<p>{{message}}</p>`}
Vue.component('nav-menu', {
  template: `<li><a href="#" @click="remove">{{title}}</a></li>`,
  props: ['title'],
  methods: {
    remove: function(){
      this.$emit('remove')
    }
  }
})
var anotherClass = {template: `<div class=""><slot></slot></div>`}
var newClass = {props: {'status': String}, template: `<div class=""><p>{{status}}</p></div>`}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //template: '<App/>',
  // components: { App }
  
  data: {
  	welcome: "Welcome to the Vue.js trial page" ,
  	hello: "Hello World",
    loggedIn: false,
    another: '',
    a: 0,
    b: 0,
    username: '',
    password: '',
    newMenu: '',
    isActive: true,
    isVisible: true,
    hasError: false,
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
  	login: function(){
      this.loggedIn = !this.loggedIn
    },
    addNewItem: function () {
      this.menu.push({item: this.newMenu})
      this.newMenu = ''
    },
    subtract: function(index){
      this.menu.splice(index, 1)
    }
  },
  computed: {
  	num: function(){
  		return (this.a * 100 + this.b * 100)/100
  	},
    name: function(){
      return 'Username:'+ this.username
    },
    pass: function(){
      return 'Password:' + this.password
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
    }
  },
  components: {
    'new-component': written,
    'class-component': newClass,
    'another-component': anotherClass
  }
})
