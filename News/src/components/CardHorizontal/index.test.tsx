// lib
import { render } from '@testing-library/react'

// components
import CardHorizontal, { CardHorizontalProps } from '.'

// helpers
import { splitTitle } from '@helpers/splitTitle'

describe('Test Card Horizontal component', () => {
  const defaultProps: CardHorizontalProps = {
    img: 'https://www.carscoops.com/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid.jpg',
    title:
      'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
    tag: 'Hotel',
    createDate: 'Dec 16',
    alt: '',
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<CardHorizontal {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Card Horizontal should render correctly', () => {
    const { getByText } = render(<CardHorizontal {...defaultProps} />)

    expect(
      getByText(
        splitTitle(
          'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
        ),
      ),
    ).toBeInTheDocument()
  })
})
