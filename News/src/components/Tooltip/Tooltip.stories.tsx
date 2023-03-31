// lib
import { Story } from '@storybook/react'

// Components
import Tooltip, { TooltipProps } from '.'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
}

const Template: Story<TooltipProps> = (args) => (
  <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }}>
    <Tooltip {...args} />
  </div>
)

export const TooltipBusiness = Template.bind({})
TooltipBusiness.args = {
  nameTag: 'Business',
}

export const TooltipEntertainment = Template.bind({})
TooltipEntertainment.args = {
  nameTag: 'Entertainment',
}
