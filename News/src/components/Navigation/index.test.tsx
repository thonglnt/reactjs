// lib
import { render, screen } from '@testing-library/react'

// components
import TabNavigation, { TabNavigationProps } from '.'

// mocks
import { mockEntertainmentBrand } from '@mocks/mockDataCategory'

// themes
import { theme } from '@themes'

describe('Test Tab Navigation component', () => {
  const defaultProps: TabNavigationProps = {
    color: theme.Colors.pigment,
    brandTab: 'Entertainment',
    navTab: mockEntertainmentBrand,
  }

  const customProps: TabNavigationProps = {
    color: theme.Colors.darkCharcoal,
    brandTab: 'Most Popular',
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<TabNavigation {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Tab Navigation should render correctly with default props', () => {
    const { getByText } = render(<TabNavigation {...defaultProps} />)

    expect(getByText('Entertainment')).toBeInTheDocument()
  })

  test('Component Tab Navigation should render correctly width custom props', () => {
    const { getByText } = render(<TabNavigation {...customProps} />)

    expect(getByText('Most Popular')).toBeInTheDocument()
  })

  test('Component Tab Navigation it should match color in custom Props', () => {
    render(<TabNavigation {...customProps} />)

    expect(screen.getAllByTestId('color')).toHaveAttribute('color', customProps.color)
  })
})
