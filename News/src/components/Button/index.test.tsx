// lib
import { fireEvent, render, screen } from '@testing-library/react'

// components
import Button, { ButtonProps } from '.'

describe('Test Button component', () => {
  const defaultProps: ButtonProps = {
    children: 'Button',
    type: 'button',
    buttonType: 'outline',
    onClick: jest.fn(),
  }

  const customProps: ButtonProps = {
    children: 'Button',
    type: 'submit',
    buttonType: 'outline',
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<Button {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('It render correctly name button', () => {
    render(<Button {...defaultProps} />)

    expect(screen.getByRole('button').textContent).toEqual('Button')
  })

  test('It render correctly default type submit button', () => {
    render(<Button {...customProps} />)

    expect(screen.getByRole('button').getAttribute('type')).toEqual('submit')
  })

  test('It render correctly default type button', () => {
    render(<Button {...defaultProps} />)

    expect(screen.getByRole('button').getAttribute('type')).toEqual('button')
  })

  test('It should call onClick Button', () => {
    render(<Button {...defaultProps} />)
    fireEvent.click(screen.getByRole('button'))

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })
})
