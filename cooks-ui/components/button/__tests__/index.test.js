import React from 'react'
import { render, shallow } from 'enzyme'
import Button from '../index'

describe('<Button/>', () => {
  const wrapper = shallow(<Button />)
  const instance = wrapper.instance()

  it('shoulder render a Button',  ()=> {
    const app = wrapper.debug()
    expect(app).toMatchSnapshot()
  })

})
