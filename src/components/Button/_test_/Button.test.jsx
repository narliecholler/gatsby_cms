import React from "react"
import { render } from '../../../../test-utils'
import Button from '../Button'

describe('Testing button', () => {

  const propObj = {
    text: 'Button Text',
    link: '/contact',
    id: 'buttonID'
  }

  it('renders properly', () => {
    const { getByTestId } = render(<Button {...propObj} />)
    expect(getByTestId('buttonID')).toHaveTextContent('Button Text')
  })
})