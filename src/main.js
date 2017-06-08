// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //template: '<App/>',
  // components: { App }
  
  

  data: {
  	welcome: "Welcome to the Vue.js trial page" ,
  	hello: "Hello World",
    loggedIn: false,
    another: 'This is another part of the page',
    nstyle: {
      width: '300px',
      background: 'grey',
      color: 'red',
      height:'100px',
      padding: '10px'
    },
  	style: {
  		color: 'yellow',
  		padding: '5px',
  		background: 'green',
      height: '300px',
      fontSize: 50
  	},
  	menu: [
  	{item: 'Home'},
  	{item: 'About'},
  	{item: 'Contacts'}
  	]
  },
  methods: {
  	login: function(){
      this.loggedIn = !this.loggedIn
    }
  },
  computed: {
  	num: function(){
  		return 1+1
  	}
  }
})
