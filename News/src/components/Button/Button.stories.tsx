// lib
import { Story } from '@storybook/react'

// themes
import { theme } from '@themes'

// components
import Button, { ButtonProps } from './'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}

export const ButtonOutline = Template.bind({})
ButtonOutline.args = {
  children: 'Button',
  buttonType: 'outline',
}

export const ButtonBackToTop = Template.bind({})
ButtonBackToTop.args = {
  icon: 'fa fa-angle-up',
  buttonType: 'backToTop',
}
