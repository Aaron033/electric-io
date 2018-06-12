import { shallowMount } from '@vue/test-utils'
import Number from '../number'

describe('Number card', () => {

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Number)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})