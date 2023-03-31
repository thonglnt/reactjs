// Lib
import { Story } from '@storybook/react';

// Components
import BodyContent, { BodyContentProps } from '@components/BodyContent';

export default {
  title: 'BodyContent',
  component: BodyContent,
};

export const BodyContentSample: Story<BodyContentProps> = () => (
  <BodyContent children={<div>Body content</div>} />
);
