// lib
import { Story } from '@storybook/react'

// Components
import Social, { SocialProps } from '.'

// mocks
import { mockDataSocialButton, mockDataSocialIcon } from '@mocks/mockDataSocial'

// themes
import { theme } from '@themes'

export default {
  title: 'Components/Social',
  component: Social,
}

const Template: Story<SocialProps> = (args) => <Social {...args} />

export const SocialIcon = Template.bind({})
SocialIcon.args = {
  icons: mockDataSocialIcon,
  size: 'fa-lg',
  colorIcon: theme.Colors.chineseSilver,
}

export const SocialButton = Template.bind({})
SocialButton.args = {
  buttons: mockDataSocialButton,
  colorIcon: theme.Colors.white,
}
