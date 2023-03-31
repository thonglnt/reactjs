// lib
import { Story } from '@storybook/react'

// Components
import CardOverlays, { CardOverlaysProps } from '.'

export default {
  title: 'Components/Card/CardOverlays',
  component: CardOverlays,
}

const Template: Story<CardOverlaysProps> = (args) => <CardOverlays {...args} />

export const CardWithDescription = Template.bind({})
CardWithDescription.args = {
  img: 'https://www.carscoops.com/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid.jpg',
  title:
    'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
  tooltip: 'Business',
  author: 'thong',
  createDate: 'jan 13',
}

export const CardDefault = Template.bind({})
CardDefault.args = {
  img: 'https://www.carscoops.com/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid.jpg',
  title:
    'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
  tooltip: 'Business',

}
