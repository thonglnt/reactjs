// Lib
import { Story } from '@storybook/react';

// Components
import { Input, InputProps } from '@components/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  label: 'Input name',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Input name',
  errorMessage: 'Input invalid',
};
