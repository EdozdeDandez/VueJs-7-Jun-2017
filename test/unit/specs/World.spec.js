import Vue from 'vue'
import World from '@/components/World'

describe('World.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof World.data).to.equal('function')
    const defaultData = World.data()
    expect(defaultData.img).to.equal('New image')
  })
})