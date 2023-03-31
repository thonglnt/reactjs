// Lib
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import User, { UserProps } from '@components/User';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'User',
  component: User,
};

const Template: Story<UserProps> = (args) => (
  <BrowserRouter>
    <User {...args} />
  </BrowserRouter>
);

export const UserSample = Template.bind({});
UserSample.args = {
  id: '1',
  avatar:
    'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar-1615695904-2089-1615696022.jpg',
  name: 'name',
  className: 'user-item',
  onRemoveUser: action('onRemoveUser'),
};

export const UserSelected = Template.bind({});
UserSelected.args = {
  id: '1',
  avatar:
    'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar-1615695904-2089-1615696022.jpg',
  name: 'name',
  className: 'user-item user-selected',
  onRemoveUser: action('onRemoveUser'),
};
