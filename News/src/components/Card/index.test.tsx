// lib
import { render } from '@testing-library/react'

// components
import CardDefault, { CardProps } from '.'

// helpers
import { splitTitle } from '@helpers/splitTitle'

describe('Test Card Default component', () => {
  const defaultProps: CardProps = {
    img: 'https://www.carscoops.com/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid.jpg',
    title:
      'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
    tag: 'Hotel',
    createDate: 'Dec 16',
    alt: '',
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<CardDefault {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Card Default should render correctly', () => {
    const { getByText } = render(<CardDefault {...defaultProps} />)

    expect(
      getByText(
        splitTitle(
          'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
        ),
      ),
    ).toBeInTheDocument()
  })
})
