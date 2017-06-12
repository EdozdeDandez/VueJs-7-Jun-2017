<template>
  <div class="login">
    <form @submit.prevent="signin({ username, password })">
      <label>Username:</label>
      <input type="text" placeholder="username" v-model="username">
      <br>
      <label>Password:</label>
      <input type="password" placeholder="password" v-model="password">
      <br>
      <button type="submit">Login</button>
    </form>
    <p>{{name}}</p>
    <p>{{pass}}</p>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      loggedIn: false,
    }
  },
  computed: {
    name: function(){
      return 'Username:'+ this.username
    },
    pass: function(){
      return 'Password:' + this.password
    }
  },
  methods: {
    login: function(){
      this.loggedIn = !this.loggedIn
    },
    signin: function() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push("/")
      });
    }
  }
}
</script>
<style>
.login{
	margin: 20px;
	padding: 10px;
	background: #ffccff;
}
input{
	margin-bottom: 20px;
	margin-left: 20px;
	height: 20px;
	width: 200px;
}
</style>