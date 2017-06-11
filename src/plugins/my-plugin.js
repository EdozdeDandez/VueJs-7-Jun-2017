const MyPlugin = {
	install(Vue,options){
		Vue.prototype.$nname = 'Ed'
		Vue.mixin({
			mounted(){
				console.log('Mounted!!!')
			}
		})
	}
};


export default MyPlugin;

