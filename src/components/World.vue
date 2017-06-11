<template>
  <div class="world">
    <h2>{{img}}</h2>
    <img src="~@/assets/media/frog.jpg">
  </div>
</template>
<script>
export default {
  name: 'world',
  data () {
    return {
      img: 'New image'
    }
  }
}
</script>
<style>
</style>