// lib
import { render, screen } from '@testing-library/react'

// mocks
import { mockDataSocialButton, mockDataSocialIcon } from '@mocks/mockDataSocial'

// component
import Social, { SocialProps } from '.'

// themes
import { theme } from '@themes'

describe('Test Social component', () => {
  const defaultProps: SocialProps = {
    icons: mockDataSocialIcon,
    size: 'fa-lg',
    colorIcon: theme.Colors.black,
  }

  const customProps: SocialProps = {
    buttons: mockDataSocialButton,
    colorIcon: theme.Colors.chineseBlue,
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<Social {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Component Social it should match Default Props', () => {
    render(<Social {...defaultProps} />)

    expect(screen.getAllByTestId('colorIcon')[0]).toHaveAttribute('color', theme.Colors.black)
  })

  test('Component Social it should match Custom Props', () => {
    render(<Social {...customProps} />)

    expect(screen.getAllByTestId('colorButton')[0]).toHaveAttribute(
      'color',
      theme.Colors.chineseBlue,
    )
  })
})
