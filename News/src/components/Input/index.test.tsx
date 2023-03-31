// lib
import { render, screen } from '@testing-library/react'

// components
import Input, { InputProps } from './'

describe('Test Input component', () => {
  const defaultProps: InputProps = {
    label: 'Label',
    name: 'title',
    type: 'text',
    errorMessage: 'error',
    placeholder: 'Please enter something.',
    defaultValue: 'title',
  }

  test('It should match DOM Snapshot', () => {
    const component = render(<Input {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })

  test('It should match error message', () => {
    render(<Input {...defaultProps} />)

    expect(screen.getByRole('small')).toHaveTextContent('error')
  })
})
