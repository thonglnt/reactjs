import { Story } from '@storybook/react';

// Components
import Button, { ButtonProp } from './index';

// Styles
import '../../../assets/styles/app.css';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Story<ButtonProp> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'btn-primary',
  children: 'Button',
  type: 'button',
  size: 'large'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'btn-secondary',
  children: 'Button',
  type: 'button',
  size: 'small'
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'btn-warning',
  children: 'Button',
  type: 'button',
  size: 'small'
};
