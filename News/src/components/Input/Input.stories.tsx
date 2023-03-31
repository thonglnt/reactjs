// lib
import { Story } from '@storybook/react'

// components
import Input, { InputProps } from './'

export default {
  title: 'Components/Input',
  component: Input,
}

const Template: Story<InputProps> = (args) => <Input {...args} />

export const InputDefault = Template.bind({})
InputDefault.args = {
  name: 'Email',
  placeholder: 'Enter name',
  type: 'text',
}

export const InputWithLabel = Template.bind({})
InputWithLabel.args = {
  label: 'Input name',
  name: 'Email',
  placeholder: 'Enter name',
  type: 'text',
}

export const InputError = Template.bind({})
InputError.args = {
  errorMessage: 'Invalid name',
  name: 'Email',
  placeholder: 'Enter name',
  type: 'text',
}
