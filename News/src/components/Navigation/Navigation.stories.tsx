// lib
import { Story } from '@storybook/react'

// mocks
import { mockBusinessBrand, mockEntertainmentBrand } from '@mocks/mockDataCategory'

// Components
import TabNavigation, { TabNavigationProps } from '.'

// themes
import { theme } from '@themes'

export default {
  title: 'Components/TabNavigation',
  component: TabNavigation,
}

const Template: Story<TabNavigationProps> = (args) => <TabNavigation {...args} />

export const EntertainmentTabNavigation = Template.bind({})
EntertainmentTabNavigation.args = {
  color: theme.Colors.pigment,
  brandTab: 'Entertainment',
  navTab: mockEntertainmentBrand,
}

export const BusinessTabNavigation = Template.bind({})
BusinessTabNavigation.args = {
  color: theme.Colors.burntSienna,
  brandTab: 'Business',
  navTab: mockBusinessBrand,
}

export const MostPopularTab = Template.bind({})
MostPopularTab.args = {
  color: theme.Colors.darkCharcoal,
  brandTab: 'Most Popular',
}
