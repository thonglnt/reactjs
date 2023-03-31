// lib
import { render } from '@testing-library/react'

// components
import CardOverlays, { CardOverlaysProps } from '.'

// helpers
import { splitTitle } from '@helpers/splitTitle'

describe('Test Card Overlays component', () => {
  const defaultProps: CardOverlaysProps = {
    img: 'https://www.carscoops.com/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid.jpg',
    title:
      'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
    tooltip: 'Business',
    author: 'thong',
    createDate: 'jan 13',
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<CardOverlays {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Card Overlays should render correctly', () => {
    const { getByText } = render(<CardOverlays {...defaultProps} />)

    expect(
      getByText(
        splitTitle(
          'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
        ),
      ),
    ).toBeInTheDocument()
  })
})
