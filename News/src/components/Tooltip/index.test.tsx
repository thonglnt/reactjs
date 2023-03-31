// lib
import { render } from '@testing-library/react'

// components
import Tooltip, { TooltipProps } from '.'

describe('Test Tooltip component', () => {
  const defaultProps: TooltipProps = {
    nameTag: 'Business',
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<Tooltip {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Tooltip should render correctly', () => {
    const { getByText } = render(<Tooltip {...defaultProps} />)

    expect(getByText('Business')).toBeInTheDocument()
  })
})
