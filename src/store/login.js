import Vue from 'vue'  
import Vuex from 'vuex'
import Axios from 'axios'

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

Axios.defaults.headers.common['Authorization'] = "Bearer"+  localStorage.token

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token")
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
   login({ commit }, creds) {
     commit(LOGIN); // show spinner
     return new Promise(resolve => {
       setTimeout(() => {
         // token = HMACSHA256(base64UrlEncode() + "." + base64UrlEncode(creds),
  // secret)
         localStorage.setItem("token", "JWT");
         commit(LOGIN_SUCCESS);
         resolve();
       }, 1000);
       console.log(localStorage.token)
     });
   },
   logout({ commit }) {
     localStorage.removeItem("token");
     commit(LOGOUT);
   }
 },
 getters: {
  isLoggedIn: state => {
    return state.isLoggedIn
   }
}
})

export default store; 