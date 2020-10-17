import React from 'react'
import Input from '../Input'
import sinon from 'sinon'
import { createShallow } from '@material-ui/core/test-utils'
import { expect } from 'chai'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe('Input', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow()
  })

  it('Renderiza componente sem props', () => {
    const wrapper = shallow(<Input />)
  })

  it('Renderiza o componente com props id', () => {
    const wrapper = mount(<Input id="name" />)

    expect(wrapper.props().id).to.equal('name')

    wrapper.setProps({ id: 'teste' })

    expect(wrapper.props().id).to.equal('teste')
  })
  it('Evento de onChange', () => {
    const onChangeInput = sinon.spy()

    const event = {
      preventDefault() {},
      target: { value: 'teste' },
    }
    const component = shallow(<Input id="01" onChange={onChangeInput} />)
    component.find({ id: '01' }).simulate('change', event)
    expect(
      component
        .find({ id: '01' })
        .at(0)
        .prop('value')
    ).to.equal('teste')
  })
})
