// lib
import { Story } from '@storybook/react'

// mocks
import { Features, Travel } from '@mocks/mockDataMenu'

// Components
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const TravelDropdown = Template.bind({})
TravelDropdown.args = {
  label: 'Travel',
  options: Travel,
}

export const FeatureDropdown = Template.bind({})
FeatureDropdown.args = {
  label: 'Features',
  options: Features,
}
