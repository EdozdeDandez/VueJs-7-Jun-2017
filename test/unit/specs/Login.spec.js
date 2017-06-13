import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof Login.data).to.equal('function')
    const defaultData = Login.data()
    expect(defaultData.username).to.equal('')
    expect(defaultData.password).to.equal('')
  })
  it('updates the username and password when user types in', () => {
  	const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    const defaultData = Login.data()
    defaultData.username = 'myname'
    defaultData.password = 'password'
    Vue.nextTick(() => {
    	expect(defaultData.username).to.equal('myname')
    	expect(defaultData.password).to.equal('password')
    })
  })
  it('should check methods', () => {
  	const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
  	expect(typeof vm.$options.methods.signin).to.equal('function')
  })
})
