import { Story } from '@storybook/react';

// Components
import Textbox, { TextboxProp } from './index';

export default {
  title: 'Components/Textbox',
  component: Textbox
};

const Template: Story<TextboxProp> = (args) => <Textbox {...args} />;

export const TextboxInputString = Template.bind({});
TextboxInputString.args = {
  label: 'Field string',
  inputType: 'text',
  name: 'title',
  messageErr: 'Field is require!!!'
};

export const TextboxInputNumber = Template.bind({});
TextboxInputNumber.args = {
  label: 'Field number',
  inputType: 'number',
  name: 'title',
  messageErr: 'Field is require!!!'
};
