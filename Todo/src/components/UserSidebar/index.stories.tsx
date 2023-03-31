// Lib
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import UserSidebar, { UserSidebarProps } from '@components/UserSidebar';

// Mocks
import { mockDataUser } from '@mocks/mockDataUser';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'UserSidebar',
  component: UserSidebar,
};

export const Sample: Story<UserSidebarProps> = () => (
  <BrowserRouter>
    <UserSidebar users={mockDataUser} onRemoveUser={action('onRemoveUser')} />
  </BrowserRouter>
);
