// lib
import { render } from '@testing-library/react'

// components
import Header from '.'

describe('Test Header component', () => {
  test('It should match DOM Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  test('Component Header should render correctly', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Travel')).toBeInTheDocument()
  })
})
