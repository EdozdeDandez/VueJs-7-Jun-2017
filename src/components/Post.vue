<template>
	<div class="get">
		<input type="text" v-model="postBody" @change="postPost()"/>
		<pre>
		  <code>
			<p>{{resp}}</p>
		  </code>
		</pre>
	</div>
</template>
<script>
  import axios from 'axios';
  export default {
  	data(){
	  return {
	  	postBody: '',
	  	resp: '',
	    errors: []
	  }
    },
    methods: {
      postPost: function(){
        axios.post(`http:\/\/jsonplaceholder.typicode.com/posts`,{
          body: this.postBody
        })
        .then(response => {
          this.resp = response
          console.log(response)
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  }
</script>