const mix = {
	created: function(){
		console.log('From mixin')
	},
	methods: {
		remove: function(){
			this.$emit('remove')
		}
	}
}
 export default mix;