// Lib
import { Story } from '@storybook/react';

// Components
import ListUser, { ListUserProps } from '@components/ListUser';

// Mocks
import { mockDataUser } from '@mocks/mockDataUser';
import { BrowserRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ListUser',
  component: ListUser,
};

export const ListUserSample: Story<ListUserProps> = () => (
  <BrowserRouter>
    <ListUser listUser={mockDataUser} onRemoveUser={action('onRemoveUser')} />
  </BrowserRouter>
);
