// lib
import { Story } from '@storybook/react'

// Components
import CardHorizontal, { CardHorizontalProps } from '.'

export default {
  title: 'Components/CardHorizontal',
  component: CardHorizontal,
}

const Template: Story<CardHorizontalProps> = (args) => <CardHorizontal {...args} />

export const Card = Template.bind({})
Card.args = {
  img: 'https://www.carscoops.com/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid.jpg',
  title:
    'ASX LIVE: Atlas buys 66.7pc stake in Chicago Skyway for $US2.01b - The Australian Financial Review',
  tag: 'Hotel',
  createDate: 'Dec 16',
  alt: '',
}
