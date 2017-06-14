<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'get',
    data () {
      return {
        key: 'cce1c20fe5654d0bb46407bfdf9b93ea',
        domain: 'https://api.nytimes.com/svc/topstories/v2/home.json',
        posts: [],
        errors: []
      } 
    },
    created: function(){
    axios.get(this.domain,{
      params: {'api-key': this.key}
    })
    .then(response => {
      response.header('Access-Control-Allow-Headers', 'Authorization')
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>