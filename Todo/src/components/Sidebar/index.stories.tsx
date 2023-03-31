// Lib
import { Story } from '@storybook/react';

// Components
import Sidebar, { SidebarProps } from '@components/Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const SidebarSample: Story<SidebarProps> = () => (
  <Sidebar children={<p>Sidebar component</p>} />
);
