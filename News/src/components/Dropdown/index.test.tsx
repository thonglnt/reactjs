// lib
import { render } from '@testing-library/react'

// components
import Dropdown, { DropdownProps } from '.'

// mocks
import { Features } from '@mocks/mockDataMenu'

describe('Test Dropdown component', () => {
  const defaultProps: DropdownProps = {
    label: 'Travel',
    options: Features,
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<Dropdown {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Dropdown should render correctly', () => {
    const { getByText } = render(<Dropdown {...defaultProps} />)

    expect(getByText('Travel')).toBeInTheDocument()
  })
})
