import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'


describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Button</Button>)
    const element = wrapper.getByText('Button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
})